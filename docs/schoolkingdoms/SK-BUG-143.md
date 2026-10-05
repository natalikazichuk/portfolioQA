# SK-BUG-143 — Admin labels a per-level stat reward as one-time

> SchoolKingdoms · gamified learning platform for primary school (Ukrainian UI)

| Field | Value |
|---|---|
| **ID** | SK-BUG-143 |
| **Title** | Reward mode "Fixed per record" in the admin actually grants the stat for every level of a levelled test, so the label disagrees with the test cover and the stat calculation |
| **Module** | Rewards: stat reward for tests (test editor ↔ test cover ↔ "Hero base stats") |
| **Severity** | Minor |
| **Priority** | Medium |
| **Type** | UI / content consistency (misleading label) |
| **Status** | Closed · Fixed ([schoolkingdoms#122](https://github.com/natalikazichuk/schoolkingdoms/pull/122)) |
| **Environment** | Web (desktop), Chrome · GitHub Pages · Firebase Firestore |
| **Reproducibility** | 100% for tests with the "Levels" view and the "Fixed" reward mode |

## Context
Every test can develop one Hero stat (e.g. "Accuracy 🎯"). In the admin test editor the reward is set by two fields:
- **Units**: "Fixed per record" (`fixed`) or "Per correct answer" (`perCorrect`);
- **Amount**: number of units.

The same reward is shown or calculated in two other places:
1. **Test cover** (`test.html`): what the child sees before starting;
2. **Admin → Arena → "Hero base stats"**: "Max now" = starting value + all active tests and trainers.

## Preconditions
1. Logged in to the admin panel as an administrator.
2. A test with the **Levels** view and 10 levels ("Even and odd numbers", Maths, grade 1).
3. Reward: stat = Accuracy 🎯, Units = **Fixed per record**, Amount = **5**.

## Steps to reproduce
1. Admin → **Learning** → open "Even and odd numbers".
2. In the **🏆 Rewards** block, read the mode label: "Fixed per record", amount 5.
3. Open the test as a child: `test.html?id=<test id>` and read the reward line on the cover.
4. Admin → **Arena** → **"🦸 Hero base stats"** → row "Accuracy", column "Max now".
5. As a Hero, complete two different levels and watch "Accuracy" in the header.

## Expected result
All three places describe the reward the same way. The admin label matches the real mechanic ("per level" for a levelled test), and the editor shows the total for the whole test (5 × 10 = +50).

## Actual result
| Place | Shows | Matches the mechanic? |
|---|---|---|
| Admin test editor | "Fixed per **record**", 5 | ❌ reads as "+5 once" |
| Test cover | "+5 to Accuracy 🎯 per **level**" | ✅ |
| Granting (`test.html` → `finishLevel`) | +5 for every level completed for the **first** time, replay gives 0 | reference behaviour |
| "Hero base stats" | 5 × 10 levels = **+50** in "Max now" | ✅ |

**Impact:** the admin sees "+5" in one section and "+50" for the same test in another, with no way to explain the gap. When balancing stats it is easy to be off by a factor of 10.

## Root cause
The calculation is the same, and correct, in all three places:

```js
// test.html, finishLevel(): reward for each level
var statGain = TEST.statMode === 'perCorrect' ? statValue * correct : statValue;

// admin-arena.html, testGain(): max for "Hero base stats"
return isLevels(t) ? v * t.levels.length : v;   // fixed: per test or per level

// admin.html, testStatTotal(): sum badges in the test list
return lv ? v * lv : v;
```

But the option label in the test editor was a **static string**, the same for every format:

```js
'<option value="fixed">Фіксовано за запис</option>'   // "Fixed per record"
```

`fixed` means three different things depending on the record: once per test (single list of questions), **per level** (levelled test), once per completion (trainer/game). The label ignored this, and the editor showed no total, so the mismatch was only visible by comparing two admin sections.

This is not a calculation error. It is a **mismatch between UI copy and business logic**: the data is right, but the interface describes it wrongly.

## Fix
- **admin.html:** the mode label depends on the record:
  - levelled test → "Fixed **per level**";
  - single-list test → "Fixed **per test**";
  - trainer / game → "Fixed **per completion**".
- **admin.html:** a total line under the reward fields: "∑ Total for all 10 levels: **+50** to Accuracy 🎯". It uses the same `testStatTotal` function as the sum badges and updates live when the stat, mode or amount changes.
- **test.html:** the levelled-test cover also shows the total: "+5 to Accuracy 🎯 per level · up to +50 for 10 levels".

The granting mechanic itself was not changed, only how it is described.

**Verification:**
- Cover checked in a browser (Playwright) with mocked test data: 10 levels, Fixed, 5 → "… per level · up to +50 for 10 levels".
- Both pages' scripts pass `node --check`.
- The admin label and total still need to be checked after deploy, because the admin requires login.

## Regression notes
- Mode label for **every** format: single-list test, levelled test, trainer, game, video.
- Switch the test view Single list ↔ Levels: label and total must re-render.
- Change Amount and Units: the total updates without a reload, and the input keeps focus.
- Test with no stat: no total line, and no "+0 to …" on the cover.
- "Per correct answer" in a levelled test: the cover shows **no** "up to +N" (the sum depends on answers).
- Compare "∑ Total" in the editor with the sum badges in the test list and with "Max now" in "Hero base stats": the numbers must match.
- Replaying an already completed level must **not** grant the stat again.

## Takeaways
- A mismatch between UI copy and business logic is a defect too, even when every number is correct.
- When one value means different things in different contexts, its label must depend on the context.
- When the same quantity is shown in several places, cross-check them: that is how you find bugs no single screen reveals.

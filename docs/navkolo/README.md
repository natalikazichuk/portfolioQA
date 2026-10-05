# Navkolo — QA Case Study

**Product:** [navkolo.one](https://navkolo.one/) — SaaS for Ukrainian small and medium businesses: accounting, trade/warehouse, CRM and POS (PRRO) modules.
**Role:** Manual QA (tested as a client, without formal requirements) · **Period:** Sprint 1, 08.12 – 26.12.2023
**Environment:** Build 1.10 · Windows 10 Home 22H2 · Google Chrome 120.0.6099.71

## Approach
There was no specification, so requirements were reconstructed from the product's own help pages and common registration-form standards, then turned into checklists.

1. **Test plan** — modules in scope, goals, sprint milestones, techniques (exploratory, functional, usability), deliverables.
2. **Checklist "Registration & Login"** — positive and negative checks for every field of the sign-up form, login, password change, UI checks against ISO 25010 usability expectations.
3. **User scenarios** — business flow of an online toy shop with three roles (owner, seller, accountant): create organization → departments → warehouses and cash desks → product cards and categories → import from Excel / 1C → stock receipt → move to shop → sales documents.
4. **API checks** — `POST /api/v1/registration` in Postman (validation response `400 Bad Request` with a problem-details body) and request/response inspection in Chrome DevTools → Network.
5. **Sprint report** — what was done, what wasn't, plan for Sprint 2.

## Registration checklist — coverage
| Area | Checks |
|---|---|
| Account creation | valid registration, duplicate email, page reload, confirmation email, confirmation link |
| Login | valid credentials, wrong password, wrong login, unregistered user, password change then login with old/new password |
| Phone field | space, length −1 / +1, letters (Latin, Cyrillic, ö ä β), special characters typed and pasted |
| Email field | empty, upper/lower case, digits, hyphens, underscores, dots, no dot in domain, >320 chars, no `@`, spaces, missing local/domain part, Cyrillic and CJK characters |
| Name field | empty, Latin/Cyrillic/other scripts, case, spaces, special characters, digits, symbols ▲♦♥, max length +1, min length, multi-word names |
| Password / confirmation | empty, Cyrillic / CJK, spaces, min/max length ±1, popular passwords, password equal to email/phone, mismatched confirmation |
| UI | labels, placeholders, required-field markers, password masking, strength indicator, phone auto-format, email hints, password requirements, link to public offer |

Statuses used: `PASS` · `FAIL` · `BLOCKED` · `RETEST` · `SKIPPED` · `NOT RUN`.

## Defects found
| ID | Title | Severity |
|---|---|---|
| NAV-001 | Registration succeeds when "Confirm password" does not match "Password" | High |
| NAV-002 | Registration confirmation email is not delivered; confirmation step blocked | High |
| NAV-003 | No validation message for empty required fields (Email, Name, Password, Confirm password) | Medium |
| NAV-004 | Email with Cyrillic or CJK characters in the local part is accepted without an error | Medium |
| NAV-005 | Weak password policy: common passwords (`password`, `123456`) and a password equal to email/phone are accepted | Medium |
| NAV-006 | "Name" field accepts a single character (expected minimum 3) | Low |
| NAV-007 | "Name" field has no maximum length | Low |
| NAV-008 | Login error is the same generic message under both Email and Password fields | Low |
| NAV-009 | Sign-up form: required fields not marked with `*`, no placeholders, no email hints, password requirements not shown | Low |

## What I would do next (Sprint 2 plan)
- finish user-scenario checks for the trade module
- write formal bug reports with screenshots for every defect above
- align documentation with ISO/IEC/IEEE 29119-3
- run the skipped checks: cross-browser, autofill, SQL injection / XSS in input fields

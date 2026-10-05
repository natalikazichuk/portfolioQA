# Guru99 Bank — Training Project

**Product:** [Guru99 Bank demo](https://demo.guru99.com/V4/) — a deliberately buggy banking web app used for QA practice.
**Role:** Manual QA · **Period:** Sep–Oct 2022 (New Customer form), Dec 2023 (Agile requirements checklist)
**Tools:** Google Sheets, Jira (bug reports), Chrome

## 1. "New Customer" form — test cases & bug reports
What was done:
1. Wrote test cases covering every field of the form against the technical requirements.
2. Compared expected vs actual results and logged the mismatches.
3. Filed bug reports in Jira.
4. Checked the end-to-end "create new customer" flow.
5. Retested the reported bugs on version 2.0.

**Result: 30 test cases · 17 pass · 13 fail**

| ID | Field | Check | Expected | Actual | Result |
|---|---|---|---|---|---|
| NC1 | Customer Name | No numbers | "Numbers are not allowed" | As expected | Pass |
| NC2 | Customer Name | No special characters | "Special characters are not allowed" | As expected | Pass |
| NC3 | Customer Name | Not blank | "Customer name must not be blank" | As expected | Pass |
| NC4 | Customer Name | No leading space | "First character cannot have space" | "Numbers are not allowed" | **Fail** |
| NC5 | Address | Not blank | "Address must not be blank" | No error shown | **Fail** |
| NC6 | Address | No leading space | "First character cannot have space" | No error shown | **Fail** |
| NC7 | Address | No special characters | "Special characters are not allowed" | No error shown | **Fail** |
| NC8 | City | No special characters | "Special characters are not allowed" | As expected | Pass |
| NC9 | City | Not blank | "City Field must be not blank" | As expected | Pass |
| NC10 | City | No numbers | "Numbers are not allowed" | As expected | Pass |
| NC11 | City | No leading space | "First character cannot have space" | "Numbers are not allowed" | **Fail** |
| NC12 | State | No numbers | "Numbers are not allowed" | As expected | Pass |
| NC13 | State | Not blank | "State must not be blank" | As expected | Pass |
| NC14 | State | No special characters | "Special characters are not allowed" | As expected | Pass |
| NC15 | State | No leading space | "First character cannot have space" | "Numbers are not allowed" | **Fail** |
| NC16 | PIN | Numeric only | "Characters are not allowed" | "Special characters are not allowed" | **Fail** |
| NC17 | PIN | Not blank | "PIN must not be blank" | As expected | Pass |
| NC18 | PIN | No special characters | "Special characters are not allowed" | As expected | Pass |
| NC19 | PIN | Exactly 6 digits | "PIN Code must have 6 Digits" | As expected | Pass |
| NC20 | PIN | No leading space | "First character cannot have space" | "Characters are not allowed" | **Fail** |
| NC21 | Telephone | Not blank | "Mobile no must not be blank" | As expected | Pass |
| NC22 | Telephone | No special characters | "Special characters are not allowed" | As expected | Pass |
| NC23 | Telephone | No letters | "Characters are not allowed" | "Special characters are not allowed" | **Fail** |
| NC24 | Telephone | No leading space | "First character cannot have space" | "Characters are not allowed" | **Fail** |
| NC25 | Email | Not blank | "Email ID must not be blank" | As expected | Pass |
| NC26 | Email | Valid format (`user@domain`, `user@`, …) | "Email ID is not valid" | As expected | Pass |
| NC27 | Email | No leading space | "First character cannot have space" | No error shown | **Fail** |
| NC28 | Flow | Create customer with valid data | "Customer is created successfully!" | `Connection failed: Access denied for user 'root'@'localhost'` | **Fail** |
| NC29 | Flow | Same customer cannot be added twice | "Customer … Already Exist!!" | `Connection failed: Access denied …` | **Fail** |
| NC30 | Flow | Duplicate email rejected | "Email Address Already Exist!!" | As expected | Pass |

### Key defects
| ID | Title | Severity |
|---|---|---|
| G99-001 | Creating a valid customer fails with a raw DB error that exposes the DB user (`root@localhost`) | High |
| G99-002 | "Address" field has no validation: blank, leading space and special characters are accepted | Medium |
| G99-003 | Leading space in Name / City / State / PIN / Telephone / Email shows a wrong or no error message | Low |
| G99-004 | Wrong error text for letters in PIN and Telephone ("Special characters…" instead of "Characters are not allowed") | Low |

## 2. Agile Project — requirements checklist
A checklist built from the business requirements of three modules, with a dashboard for status metrics (NOT RUN / PASS / FAIL / BLOCKED / SKIPPED / RETEST) and a success target of **PASS ≥ 75%**.
Environment: Windows 10 Home 22H2 · Chrome 120.0.6099.111

| Module | Requirements covered |
|---|---|
| Balance Inquiry | customer can have multiple accounts; customer sees balance of own accounts only; account number must exist; Account No: not blank, no special characters, no letters; Reset / Submit |
| Mini-statement | customer sees mini-statement of own account only; invalid account → error; Account No: not blank, no special characters, no letters; Reset / Submit |
| Login | User ID not blank; Password not blank |

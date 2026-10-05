# VeteranJobsPortal — QA Test Plan

| Field | Value |
|---|---|
| Test Plan ID | TP-VJP-001 |
| Project | Veteran Jobs Portal |
| Document type | Test Plan |
| Version | 1.0 |
| Author | Natalia Kazichuk (QA Engineer) |
| Date | 26.03.2026 |

**References:** [User Stories & Testing Scenarios](USER_STORIES_AND_SCENARIOS.md) · [Test Cases](TEST_CASES.md) · [Requirements Traceability Matrix](RTM.md) · Product Requirements (PRD) · QA best practices

---

## 1. Project overview
Veteran Jobs Portal is a web platform that helps veterans find jobs and helps employers find candidates.
Veterans create profiles, browse vacancies and apply; recruiters publish vacancies and search for candidates. Access to a candidate's contact information is controlled by the veteran.

## 2. Purpose
This document describes the test strategy, scope, approach and criteria for the Veteran Jobs Portal.

Main goals of testing:
- verify the core functionality of the system
- make sure business processes work correctly
- find defects before the product is released

## 3. Objectives
- verify registration and authorization
- verify creation and management of veteran and recruiter profiles
- verify creation, search and filtering of job postings
- verify the job application flow
- verify the contact access system
- verify UI/UX, performance and edge cases

## 4. Scope

### In scope
1. Authentication & Authorization
2. Veteran Profile Management
3. Recruiter Profile Management
4. Job Posting Management
5. Job Search & Discovery
6. Job Applications
7. Contact Access System
8. Content Moderation
9. UI/UX Testing
10. Performance & Edge Cases

### Out of scope
- integrations with third-party payment systems
- native mobile apps (if any)
- automated API testing (unless the API is provided separately)

## 5. Test strategy

| Type | What is checked |
|---|---|
| Functional | registration, profile creation, job creation, job search, applications, contact management |
| UI/UX | responsiveness (mobile / tablet / desktop), navigation, error messages, usability |
| Security | role-based access control, protected routes, authorization checks |
| Performance | large number of jobs, large number of skills, concurrent applications |
| Edge cases | empty results, very long texts, special characters, network failure |

## 6. Test levels
- **Smoke** — critical path: browse jobs, register, log in, create profile, create job, apply.
- **System** — full check of all platform features.
- **UAT** — business journeys: veteran journey, recruiter journey, full hiring workflow.

## 7. Test environment
- **Hardware:** desktop PC, mobile devices, tablet
- **OS:** Windows / macOS
- **Browsers:** Chrome, Firefox, Edge, Safari
- **Database:** SQL database

## 8. Test data
| Type | Example |
|---|---|
| Veteran account | `veteran.test@example.com` |
| Recruiter account | `recruiter.test@example.com` |
| Job posting | title: *Senior Project Manager* |

## 9. Entry criteria
- the system is deployed
- a test database is available
- user stories are defined
- test accounts are created

## 10. Exit criteria
- all critical test cases are executed
- smoke tests pass
- critical bugs are fixed
- UAT is completed successfully

## 11. Deliverables
Test Plan · Test Cases · Bug Reports · Test Summary Report · Test Dashboard

## 12. Risks
| Risk | Impact |
|---|---|
| Incorrect authorization | access to other users' data |
| Errors in job filters | users cannot find jobs |
| Contact access problems | recruiters cannot reach candidates |
| Low performance | slow system |

## 13. Schedule
| Stage | When |
|---|---|
| Smoke testing | after every deploy |
| Functional testing | main test cycle |
| Regression testing | after bug fixes |
| UAT | before release |

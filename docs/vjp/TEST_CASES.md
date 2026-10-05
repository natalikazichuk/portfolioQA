# VeteranJobsPortal — Test Cases

40 test cases across 8 areas. Traceability to user stories: [RTM](RTM.md). Strategy: [Test Plan](TEST_PLAN.md).

## Authentication & Authorization
| ID | Test case | Steps | Expected result | Priority |
|---|---|---|---|---|
| TC-001 | Register as Veteran | Open Sign Up → Select Veteran → Enter valid email/password → Submit | User registered and redirected to profile setup | High |
| TC-002 | Register as Recruiter | Open Sign Up → Select Recruiter → Enter valid email/password → Submit | Recruiter account created and redirected to profile setup | High |
| TC-003 | Registration with invalid password | Enter a password that doesn't meet requirements | Error message displayed | Medium |
| TC-004 | Login with valid credentials | Enter valid email and password → Click login | User logged in and redirected to dashboard | High |
| TC-005 | Login with invalid credentials | Enter wrong password → Submit | Error message displayed | High |
| TC-006 | Access protected page without login | Open `/veteran/dashboard` without login | Redirect to login page | High |
| TC-007 | Role-based access restriction | Login as Veteran → Open recruiter dashboard | Access denied | High |

## Veteran Profile
| ID | Test case | Steps | Expected result | Priority |
|---|---|---|---|---|
| TC-008 | Create veteran profile with required fields | Fill required fields → Submit | Profile created | High |
| TC-009 | Create profile without first name | Leave first name empty → Submit | Validation error shown | High |
| TC-010 | Create profile without contact info | Leave phone/email empty → Submit | Validation error shown | High |
| TC-011 | Add skills to profile | Add multiple skills → Save | Skills saved correctly | Medium |
| TC-012 | Edit veteran profile | Open profile edit → Update fields → Save | Changes saved | High |
| TC-013 | Publish veteran profile | Click publish profile | Profile becomes visible to recruiters | High |
| TC-014 | Publish incomplete profile | Attempt to publish incomplete profile | System prevents publishing | High |
| TC-015 | Unpublish profile | Click hide profile | Profile hidden from recruiters | Medium |

## Recruiter Profile
| ID | Test case | Steps | Expected result | Priority |
|---|---|---|---|---|
| TC-016 | Create recruiter profile | Enter company name → Submit | Profile created | High |
| TC-017 | Create recruiter profile without company name | Leave company name empty | Validation error shown | High |
| TC-018 | Edit recruiter profile | Update company description → Save | Changes saved | Medium |

## Job Posting
| ID | Test case | Steps | Expected result | Priority |
|---|---|---|---|---|
| TC-019 | Create job posting | Fill required fields → Submit | Job created and visible in listings | High |
| TC-020 | Create job without title | Leave job title empty → Submit | Validation error displayed | High |
| TC-021 | Upload company logo | Upload logo image | Image compressed and displayed | Medium |
| TC-022 | Upload invalid logo format | Upload non-image file | Upload rejected | Medium |
| TC-023 | Job visible in public listings | Create job → Open jobs page | Job appears in listings | High |

## Job Search
| ID | Test case | Steps | Expected result | Priority |
|---|---|---|---|---|
| TC-024 | Search job by keyword | Enter keyword in search field | Jobs filtered correctly | High |
| TC-025 | Filter jobs by location | Select "Remote" filter | Only remote jobs shown | Medium |
| TC-026 | Filter jobs by job type | Select "Full-time" filter | Only full-time jobs shown | Medium |
| TC-027 | Combine multiple filters | Apply several filters | Correct filtered results shown | Medium |
| TC-028 | Clear filters | Click clear filters | All jobs displayed | Low |
| TC-029 | Open job details | Click job card | Job detail page opens | High |
| TC-030 | Pagination | Navigate to page 2 | Next jobs displayed | Medium |

## Job Applications
| ID | Test case | Steps | Expected result | Priority |
|---|---|---|---|---|
| TC-031 | Apply to job | Click Apply button | Application created | High |
| TC-032 | Apply without login | Click Apply while logged out | Redirect to login | High |
| TC-033 | Apply to same job twice | Apply again | Error message shown | High |
| TC-034 | View applications | Open dashboard | List of applications displayed | High |

## Contact Access
| ID | Test case | Steps | Expected result | Priority |
|---|---|---|---|---|
| TC-035 | Request contact access | Recruiter clicks request contact | Request created | High |
| TC-036 | Approve contact request | Veteran approves request | Recruiter sees contact info | High |
| TC-037 | Reject contact request | Veteran rejects request | Recruiter cannot see contact | Medium |
| TC-038 | Re-request contact | Recruiter re-requests access | New request created | Medium |
| TC-039 | Contact info blurred without access | Open candidate profile | Contact info hidden | High |

## Edge Cases
| ID | Test case | Steps | Expected result | Priority |
|---|---|---|---|---|
| TC-040 | Rapid clicking submit button | Click submit multiple times | Only one request processed | Medium |

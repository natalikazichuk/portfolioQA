# VeteranJobsPortal — User Stories, Testing Scenarios, Smoke & UAT

> Author: Natalia Kazichuk · March 2026 · Related: [Test Plan](TEST_PLAN.md) · [Test Cases](TEST_CASES.md) · [RTM](RTM.md)

## Table of Contents

1.  User Stories

      - Guest/Public User Stories
      - Veteran User Stories
      - Recruiter User Stories
2.  Testing Scenarios

      - Authentication & Authorization
      - Veteran Profile Management
      - Recruiter Profile Management
      - Job Posting Management
      - Job Search & Discovery
      - Job Applications
      - Contact Access System
      - Content Moderation
      - UI/UX Testing
      - Performance & Edge Cases

-----

## User Stories

## Guest/Public User Stories

### US-G-001: Browse Jobs Without Authentication

As a guest user I want to browse available job postings without signing in So that I can explore opportunities before deciding to register

Acceptance Criteria:

  - Guest users can view the landing page
  - Guest users can navigate to the jobs listing page
  - Guest users can see all active job postings
  - Guest users can view job details
  - Guest users cannot apply to jobs without authentication
  - Guest users are prompted to sign in when attempting to apply

### US-G-002: Search and Filter Jobs

As a guest user I want to search and filter job postings So that I can find relevant opportunities quickly

Acceptance Criteria:

  - Users can search jobs by keywords (title, description, skills)
  - Users can filter by location type (remote, onsite, hybrid)
  - Users can filter by job type (full-time, part-time, contract, freelance)
  - Users can filter by job categories
  - Users can filter by posted date
  - Search and filter parameters persist in URL
  - Results update dynamically based on filters

### US-G-003: View Job Details

As a guest user I want to view detailed information about a job posting So that I can make an informed decision about applying

Acceptance Criteria:

  - Users can view job title, company name, and company logo
  - Users can see job description, required skills, and job directions
  - Users can see location type and job type
  - Users can see when the job was posted
  - Users can navigate back to job listings

### US-G-004: Access Information Pages

As a guest user I want to access About, Contact, Privacy Policy, and Terms of Use pages So that I can learn about the platform and understand policies

Acceptance Criteria:

  - Users can navigate to About page
  - Users can navigate to Contact page
  - Users can navigate to Privacy Policy page
  - Users can navigate to Terms of Use page
  - All pages are accessible without authentication

-----

## Veteran User Stories

### US-V-001: Register as Veteran

As a potential user I want to register for an account with the veteran role So that I can access veteran-specific features

Acceptance Criteria:

  - User can access sign-up page
  - User can select "veteran" as their role
  - User can provide email and password
  - Password meets validation requirements
  - User receives confirmation upon successful registration
  - User is redirected to profile setup after registration
  - User cannot change role after registration

### US-V-002: Sign In to Account

As a registered veteran I want to sign in to my account So that I can access my dashboard and profile

Acceptance Criteria:

  - User can access sign-in page
  - User can sign in with email and password
  - User is redirected to appropriate dashboard based on role
  - Invalid credentials show appropriate error message
  - User session persists across page refreshes

### US-V-003: Create Veteran Profile

As a veteran I want to create my profile with personal and professional information So that recruiters can find and evaluate me for positions

Acceptance Criteria:

  - User is redirected to profile setup after first login
  - User can enter first name (required) and last name (optional)
  - User can enter city and country
  - User can provide at least one contact method (email or phone)
  - User can describe military background
  - User can select multiple skills from suggestions or add custom skills
  - User can select preferred job types (full-time, part-time, contract, freelance)
  - User can select work format preferences (Remote, Office)
  - User can select job directions (multiple selections)
  - User can write an "About Me" section
  - Content moderation prevents prohibited contact information in text fields
  - Profile is saved successfully
  - User is redirected to dashboard after profile creation

### US-V-004: Edit Veteran Profile

As a veteran I want to edit my profile information So that I can keep my information up to date

Acceptance Criteria:

  - User can access profile edit page from dashboard
  - User can update all profile fields
  - Changes are saved successfully
  - User receives confirmation of successful update
  - Updated information is immediately reflected

### US-V-005: Publish Veteran Profile

As a veteran I want to publish my profile So that recruiters can discover and view my profile

Acceptance Criteria:

  - User can access publish profile page
  - System validates profile completeness (name, skills, military background)
  - User can toggle profile publication status
  - Published profiles are visible to recruiters in candidates list
  - Unpublished profiles are hidden from recruiters
  - User can see current publication status
  - User receives confirmation when status changes

### US-V-006: Browse Available Jobs

As a veteran I want to browse and search for job postings So that I can find suitable employment opportunities

Acceptance Criteria:

  - User can view all active job postings
  - User can search jobs by keywords
  - User can filter jobs by multiple criteria
  - User can view job details
  - User can see company logos on job listings
  - Search and filter state persists in URL

### US-V-007: Apply to Job Posting

As a veteran I want to apply to job postings So that recruiters can consider me for positions

Acceptance Criteria:

  - User can view job details
  - User can click "Apply" button on job detail page
  - Application is created with "pending" status
  - User cannot apply to the same job twice
  - User sees confirmation after successful application
  - User can view their applications in dashboard

### US-V-008: View My Applications

As a veteran I want to view my job applications and their status So that I can track my job search progress

Acceptance Criteria:

  - User can see list of all their applications
  - Each application shows job title, company, and status
  - Status can be: pending, reviewed, accepted, or rejected
  - Applications are sorted by most recent first
  - User can click to view job details from application

### US-V-009: Manage Contact Access Requests

As a veteran I want to approve or reject contact access requests from recruiters So that I can control who can see my contact information

Acceptance Criteria:

  - User can see pending contact requests in dashboard
  - User can see recruiter company name for each request
  - User can approve a contact request
  - User can reject a contact request
  - Approved requests grant recruiter access to contact info
  - Rejected requests can be re-requested by recruiter
  - User receives confirmation when action is taken

### US-V-010: View Dashboard Overview

As a veteran I want to view an overview of my profile, applications, and opportunities So that I can quickly assess my job search status

Acceptance Criteria:

  - Dashboard shows profile completion status
  - Dashboard shows recent job postings
  - Dashboard shows recent applications with status
  - Dashboard shows pending contact requests
  - Dashboard provides quick links to key actions
  - User can navigate to profile, publish profile, and browse jobs

-----

## Recruiter User Stories

### US-R-001: Register as Recruiter

As a potential user I want to register for an account with the recruiter role So that I can post jobs and find candidates

Acceptance Criteria:

  - User can access sign-up page
  - User can select "recruiter" as their role
  - User can provide email and password
  - Password meets validation requirements
  - User receives confirmation upon successful registration
  - User is redirected to profile setup after registration
  - User cannot change role after registration

### US-R-002: Create Recruiter Profile

As a recruiter I want to create my company profile So that veterans can learn about my company

Acceptance Criteria:

  - User is redirected to profile setup after first login
  - User can enter company name (required)
  - User can enter industry
  - User can write company description
  - User can provide contact email
  - Profile is saved successfully
  - User is redirected to dashboard after profile creation

### US-R-003: Edit Recruiter Profile

As a recruiter I want to edit my company profile So that I can keep company information current

Acceptance Criteria:

  - User can access profile edit page from dashboard
  - User can update all profile fields
  - Changes are saved successfully
  - User receives confirmation of successful update

### US-R-004: Create Job Posting

As a recruiter I want to create and publish job postings So that veterans can find and apply to my open positions

Acceptance Criteria:

  - User can access "Create Job" page
  - User can enter job title (required)
  - User can enter company name (required)
  - User can upload company logo (optional, auto-compressed to 85x85px, 5KB)
  - User can select location type (remote, onsite, hybrid)
  - User can select job type (full-time, part-time, contract, freelance)
  - User can enter location text
  - User can write job description (required)
  - User can select job directions (multiple, at least one required)
  - User can add required skills (multiple)
  - Content moderation prevents prohibited contact information
  - Job is created with "active" status by default
  - User is redirected to dashboard after creation
  - Job appears in public job listings immediately

### US-R-005: View My Job Postings

As a recruiter I want to view all my job postings So that I can manage them effectively

Acceptance Criteria:

  - Dashboard shows list of all job postings
  - Each posting shows title, company, status, and creation date
  - User can see number of applicants for each job
  - User can click to view applicants for a job
  - Jobs are sorted by most recent first

### US-R-006: View Job Applicants

As a recruiter I want to view applicants for my job postings So that I can evaluate and manage candidates

Acceptance Criteria:

  - User can access applicants page for each job
  - User can see list of all applicants
  - Each applicant shows veteran name and application status
  - User can expand applicant cards to see full profile
  - User can see veteran's skills, military background, and preferences
  - User can update application status (pending, reviewed, accepted, rejected)
  - Accepted applications automatically grant contact access

### US-R-007: Browse Published Veteran Profiles

As a recruiter I want to browse published veteran profiles So that I can proactively find suitable candidates

Acceptance Criteria:

  - User can access candidates page
  - User can see all published veteran profiles
  - User can search candidates by name, skills, experience, or job directions
  - User can filter by location (city, country)
  - User can filter by work format (Remote, Office)
  - User can filter by preferred job types
  - User can expand candidate cards to see full details
  - Contact information is blurred until access is granted

### US-R-008: Request Contact Access

As a recruiter I want to request contact information from veterans So that I can reach out to promising candidates

Acceptance Criteria:

  - User can see "Request Contact" button on candidate profiles
  - User can submit contact access request
  - Request status is shown (pending, approved, rejected)
  - User cannot see contact info until request is approved
  - User can re-request after rejection
  - User receives notification when request is approved

### US-R-009: View Contact Information

As a recruiter I want to view veteran contact information So that I can contact candidates directly

Acceptance Criteria:

  - User can see contact email and phone when access is granted
  - Contact info is displayed in a clear, accessible format
  - User can click email to open mail client
  - User can click phone to initiate call
  - Contact info is only visible when access is granted

### US-R-010: View Dashboard Overview

As a recruiter I want to view an overview of my jobs, applicants, and candidates So that I can efficiently manage my recruitment activities

Acceptance Criteria:

  - Dashboard shows total number of active job postings
  - Dashboard shows total number of applicants
  - Dashboard shows recent job postings
  - Dashboard shows recent applications
  - Dashboard provides quick links to create job, view candidates, and manage profile

-----

## Testing Scenarios

## Authentication & Authorization

### TS-AUTH-001: User Registration - Veteran

Test Steps:

1.  Navigate to sign-up page
2.  Select "veteran" role
3.  Enter valid email and password
4.  Submit registration form
5.  Verify redirect to profile setup page

Expected Results:

  - Registration succeeds
  - User is authenticated
  - User role is set to "veteran"
  - Redirect to /veteran/profile/setup

### TS-AUTH-002: User Registration - Recruiter

Test Steps:

1.  Navigate to sign-up page
2.  Select "recruiter" role
3.  Enter valid email and password
4.  Submit registration form
5.  Verify redirect to profile setup page

Expected Results:

  - Registration succeeds
  - User is authenticated
  - User role is set to "recruiter"
  - Redirect to /recruiter/profile/setup

### TS-AUTH-003: User Registration - Invalid Password

Test Steps:

1.  Navigate to sign-up page
2.  Enter valid email
3.  Enter password that doesn't meet requirements
4.  Submit registration form

Expected Results:

  - Registration fails
  - Error message displays password requirements
  - User remains on sign-up page

### TS-AUTH-004: User Sign In - Valid Credentials

Test Steps:

1.  Navigate to sign-in page
2.  Enter valid email and password
3.  Submit sign-in form

Expected Results:

  - Sign-in succeeds
  - User is redirected to appropriate dashboard based on role
  - Session persists across page refreshes

### TS-AUTH-005: User Sign In - Invalid Credentials

Test Steps:

1.  Navigate to sign-in page
2.  Enter invalid email or password
3.  Submit sign-in form

Expected Results:

  - Sign-in fails
  - Error message displays
  - User remains on sign-in page

### TS-AUTH-006: Protected Route Access - Unauthenticated

Test Steps:

1.  While logged out, navigate to /veteran/dashboard
2.  Attempt to access protected route

Expected Results:

  - User is redirected to sign-in page
  - After sign-in, user is redirected to originally requested page

### TS-AUTH-007: Protected Route Access - Wrong Role

Test Steps:

1.  Sign in as veteran
2.  Navigate to /recruiter/dashboard

Expected Results:

  - Access is denied
  - User is redirected to appropriate page for their role

### TS-AUTH-008: Session Persistence

Test Steps:

1.  Sign in to account
2.  Refresh the page
3.  Navigate to different pages

Expected Results:

  - User remains authenticated
  - User session persists
  - No need to sign in again

-----

## Veteran Profile Management

### TS-VET-001: Create Veteran Profile - Complete

Test Steps:

1.  Sign in as veteran (new account)
2.  Fill in all required fields:

      - First name
      - Contact email or phone
      - Military background
      - At least one skill
      - At least one work format
      - At least one job direction
3.  Submit profile form

Expected Results:

  - Profile is created successfully
  - User is redirected to dashboard
  - Profile data is saved correctly

### TS-VET-002: Create Veteran Profile - Missing Required Fields

Test Steps:

1.  Sign in as veteran (new account)
2.  Leave first name empty
3.  Submit profile form

Expected Results:

  - Form validation prevents submission
  - Error message indicates missing required field
  - Profile is not created

### TS-VET-003: Create Veteran Profile - No Contact Info

Test Steps:

1.  Sign in as veteran (new account)
2.  Leave both contact email and phone empty
3.  Submit profile form

Expected Results:

  - Form validation prevents submission
  - Error message: "Вкажіть принаймні один спосіб зв'язку"
  - Profile is not created

### TS-VET-004: Create Veteran Profile - Content Moderation

Test Steps:

1.  Sign in as veteran (new account)
2.  Enter prohibited contact information in "About Me" or "Military Background"
3.  Submit profile form

Expected Results:

  - Form validation prevents submission
  - Error message indicates content violation
  - Profile is not created

### TS-VET-005: Edit Veteran Profile

Test Steps:

1.  Sign in as veteran with existing profile
2.  Navigate to profile edit page
3.  Update skills, job directions, or other fields
4.  Save changes

Expected Results:

  - Changes are saved successfully
  - Updated information is reflected immediately
  - Success message is displayed

### TS-VET-006: Publish Profile - Complete Profile

Test Steps:

1.  Sign in as veteran with complete profile
2.  Navigate to publish profile page
3.  Click "Publish Profile" button

Expected Results:

  - Profile is published successfully
  - Status changes to "published"
  - Profile becomes visible to recruiters
  - Success message is displayed

### TS-VET-007: Publish Profile - Incomplete Profile

Test Steps:

1.  Sign in as veteran with incomplete profile (missing name, skills, or military background)
2.  Navigate to publish profile page
3.  Attempt to publish profile

Expected Results:

  - Publish button is disabled
  - Warning message indicates missing required fields
  - Profile cannot be published until complete

### TS-VET-008: Unpublish Profile

Test Steps:

1.  Sign in as veteran with published profile
2.  Navigate to publish profile page
3.  Click "Hide Profile" button

Expected Results:

  - Profile is unpublished successfully
  - Status changes to "unpublished"
  - Profile is hidden from recruiters
  - Success message is displayed

-----

## Recruiter Profile Management

### TS-REC-001: Create Recruiter Profile

Test Steps:

1.  Sign in as recruiter (new account)
2.  Enter company name (required)
3.  Optionally enter industry, description, contact email
4.  Submit profile form

Expected Results:

  - Profile is created successfully
  - User is redirected to dashboard
  - Profile data is saved correctly

### TS-REC-002: Create Recruiter Profile - Missing Company Name

Test Steps:

1.  Sign in as recruiter (new account)
2.  Leave company name empty
3.  Submit profile form

Expected Results:

  - Form validation prevents submission
  - Error message indicates missing company name
  - Profile is not created

### TS-REC-003: Edit Recruiter Profile

Test Steps:

1.  Sign in as recruiter with existing profile
2.  Navigate to profile edit page
3.  Update company description or other fields
4.  Save changes

Expected Results:

  - Changes are saved successfully
  - Updated information is reflected immediately
  - Success message is displayed

-----

## Job Posting Management

### TS-JOB-001: Create Job Posting - Complete

Test Steps:

1.  Sign in as recruiter
2.  Navigate to "Create Job" page
3.  Fill in all required fields:

      - Job title
      - Company name
      - Location type
      - Job type
      - Location
      - Description
      - At least one job direction
4.  Optionally upload company logo
5.  Submit job form

Expected Results:

  - Job is created successfully
  - Job appears in public listings immediately
  - User is redirected to dashboard
  - Job has "active" status

### TS-JOB-002: Create Job Posting - With Logo

Test Steps:

1.  Sign in as recruiter
2.  Navigate to "Create Job" page
3.  Upload company logo image
4.  Fill in required fields
5.  Submit job form

Expected Results:

  - Logo is compressed to 85x85px and 5KB
  - Logo preview is shown before submission
  - Logo is uploaded to storage
  - Logo URL is saved with job posting
  - Logo displays correctly on job listings

### TS-JOB-003: Create Job Posting - Invalid Logo Format

Test Steps:

1.  Sign in as recruiter
2.  Navigate to "Create Job" page
3.  Attempt to upload non-image file as logo

Expected Results:

  - Upload is rejected
  - Error message indicates invalid file type
  - User can select different file

### TS-JOB-004: Create Job Posting - Missing Required Fields

Test Steps:

1.  Sign in as recruiter
2.  Navigate to "Create Job" page
3.  Leave job title empty
4.  Submit job form

Expected Results:

  - Form validation prevents submission
  - Error message indicates missing required field
  - Job is not created

### TS-JOB-005: Create Job Posting - No Job Directions

Test Steps:

1.  Sign in as recruiter
2.  Navigate to "Create Job" page
3.  Fill in all fields except job directions
4.  Submit job form

Expected Results:

  - Form validation prevents submission
  - Error message indicates at least one job direction is required
  - Job is not created

### TS-JOB-006: Create Job Posting - Content Moderation

Test Steps:

1.  Sign in as recruiter
2.  Navigate to "Create Job" page
3.  Enter prohibited contact information in job description
4.  Submit job form

Expected Results:

  - Form validation prevents submission
  - Error message indicates content violation
  - Job is not created

### TS-JOB-007: View Job Postings List

Test Steps:

1.  Sign in as recruiter
2.  Navigate to dashboard
3.  View list of job postings

Expected Results:

  - All job postings are displayed
  - Each posting shows title, company, status, creation date
  - Number of applicants is shown for each job
  - Jobs are sorted by most recent first

-----

## Job Search & Discovery

### TS-SEARCH-001: Search Jobs by Keyword

Test Steps:

1.  Navigate to jobs page (as guest or authenticated user)
2.  Enter search keyword in search box
3.  Submit search

Expected Results:

  - Results are filtered by keyword
  - Keyword matches job title, description, or skills
  - Search parameter persists in URL
  - Results update dynamically

### TS-SEARCH-002: Filter Jobs by Location Type

Test Steps:

1.  Navigate to jobs page
2.  Select "Remote" location type filter
3.  Apply filter

Expected Results:

  - Only remote jobs are displayed
  - Filter parameter persists in URL
  - Results update immediately

### TS-SEARCH-003: Filter Jobs by Job Type

Test Steps:

1.  Navigate to jobs page
2.  Select "Full-time" job type filter
3.  Apply filter

Expected Results:

  - Only full-time jobs are displayed
  - Filter parameter persists in URL
  - Results update immediately

### TS-SEARCH-004: Filter Jobs by Category

Test Steps:

1.  Navigate to jobs page
2.  Select one or more job categories
3.  Apply filters

Expected Results:

  - Only jobs matching selected categories are displayed
  - Multiple categories can be selected
  - Filter parameters persist in URL

### TS-SEARCH-005: Combine Multiple Filters

Test Steps:

1.  Navigate to jobs page
2.  Enter search keyword
3.  Select location type filter
4.  Select job type filter
5.  Select category filter

Expected Results:

  - Results match all selected filters
  - All filter parameters persist in URL
  - Results update correctly when filters change

### TS-SEARCH-006: Clear Filters

Test Steps:

1.  Navigate to jobs page with active filters
2.  Click "Clear Filters" button

Expected Results:

  - All filters are cleared
  - All jobs are displayed
  - URL parameters are removed

### TS-SEARCH-007: View Job Details

Test Steps:

1.  Navigate to jobs page
2.  Click on a job posting

Expected Results:

  - Job detail page loads
  - All job information is displayed correctly
  - Company logo is displayed (if available)
  - User can navigate back to listings

### TS-SEARCH-008: Pagination

Test Steps:

1.  Navigate to jobs page with more than 10 jobs
2.  Navigate to next page

Expected Results:

  - Next 10 jobs are displayed
  - Pagination controls work correctly
  - Current page is indicated

-----

## Job Applications

### TS-APP-001: Apply to Job - Veteran

Test Steps:

1.  Sign in as veteran
2.  Navigate to job detail page
3.  Click "Apply" button

Expected Results:

  - Application is created with "pending" status
  - Success message is displayed
  - Button changes to "Applied" state
  - Application appears in veteran's dashboard

### TS-APP-002: Apply to Job - Unauthenticated

Test Steps:

1.  While logged out, navigate to job detail page
2.  Click "Apply" button

Expected Results:

  - User is redirected to sign-in page
  - After sign-in, user can return to job and apply

### TS-APP-003: Apply to Same Job Twice

Test Steps:

1.  Sign in as veteran
2.  Apply to a job
3.  Attempt to apply to the same job again

Expected Results:

  - Second application is prevented
  - Error message indicates already applied
  - Application status remains unchanged

### TS-APP-004: View Applications - Veteran

Test Steps:

1.  Sign in as veteran
2.  Navigate to dashboard
3.  View applications section

Expected Results:

  - All applications are listed
  - Each application shows job title, company, and status
  - Applications are sorted by most recent first
  - User can click to view job details

### TS-APP-005: View Applicants - Recruiter

Test Steps:

1.  Sign in as recruiter
2.  Navigate to job applicants page for a job
3.  View list of applicants

Expected Results:

  - All applicants for the job are listed
  - Each applicant shows name and application status
  - User can expand cards to see full profile
  - User can update application status

### TS-APP-006: Update Application Status - Recruiter

Test Steps:

1.  Sign in as recruiter
2.  Navigate to job applicants page
3.  Change application status from "pending" to "accepted"

Expected Results:

  - Status is updated successfully
  - If status is "accepted", contact access is automatically granted
  - Updated status is reflected immediately

-----

## Contact Access System

### TS-CONTACT-001: Request Contact Access - Recruiter

Test Steps:

1.  Sign in as recruiter
2.  Navigate to candidates page
3.  Find a veteran profile without contact access
4.  Click "Request Contact" button

Expected Results:

  - Contact request is created with "pending" status
  - Request appears in veteran's dashboard
  - Button changes to show "Request Sent" state
  - Recruiter cannot see contact info yet

### TS-CONTACT-002: Approve Contact Request - Veteran

Test Steps:

1.  Sign in as veteran
2.  Navigate to dashboard
3.  Find pending contact request
4.  Click "Approve" button

Expected Results:

  - Request status changes to "approved"
  - Recruiter gains access to contact information
  - Contact info becomes visible to recruiter
  - Success message is displayed

### TS-CONTACT-003: Reject Contact Request - Veteran

Test Steps:

1.  Sign in as veteran
2.  Navigate to dashboard
3.  Find pending contact request
4.  Click "Reject" button

Expected Results:

  - Request status changes to "rejected"
  - Recruiter does not gain access
  - Recruiter can see option to re-request
  - Success message is displayed

### TS-CONTACT-004: Re-request Contact Access - Recruiter

Test Steps:

1.  Sign in as recruiter
2.  Navigate to candidates page
3.  Find veteran with rejected request
4.  Click "Re-request" button

Expected Results:

  - New request is created with "pending" status
  - Request appears in veteran's dashboard again
  - Veteran can approve or reject again

### TS-CONTACT-005: View Contact Information - Recruiter

Test Steps:

1.  Sign in as recruiter with approved contact access
2.  Navigate to candidate profile
3.  View contact information section

Expected Results:

  - Contact email and phone are displayed clearly
  - Email is clickable (mailto link)
  - Phone is clickable (tel link)
  - Contact info is not blurred

### TS-CONTACT-006: Automatic Contact Access via Accepted Application

Test Steps:

1.  Sign in as recruiter
2.  Navigate to job applicants page
3.  Change application status to "accepted"

Expected Results:

  - Contact access is automatically granted
  - Recruiter can immediately see contact information
  - No separate approval needed from veteran

### TS-CONTACT-007: Contact Info Blurred - No Access

Test Steps:

1.  Sign in as recruiter
2.  Navigate to candidates page
3.  View veteran profile without contact access

Expected Results:

  - Contact information is blurred
  - "Request Contact" button is visible
  - Recruiter cannot see actual contact details

-----

## Content Moderation

### TS-MOD-001: Prevent Contact Info in Profile Text

Test Steps:

1.  Sign in as veteran
2.  Navigate to profile setup
3.  Enter email address in "About Me" field
4.  Submit form

Expected Results:

  - Form validation prevents submission
  - Error message indicates prohibited content
  - Profile is not saved

### TS-MOD-002: Prevent Contact Info in Job Description

Test Steps:

1.  Sign in as recruiter
2.  Navigate to create job page
3.  Enter phone number in job description
4.  Submit form

Expected Results:

  - Form validation prevents submission
  - Error message indicates prohibited content
  - Job is not created

### TS-MOD-003: Allow Contact Info in Designated Fields

Test Steps:

1.  Sign in as veteran
2.  Navigate to profile setup
3.  Enter email in "Contact Email" field
4.  Enter phone in "Contact Phone" field
5.  Submit form

Expected Results:

  - Form submission succeeds
  - Contact information is saved correctly
  - No moderation errors

-----

## UI/UX Testing

### TS-UI-001: Responsive Design - Mobile

Test Steps:

1.  Open application on mobile device or resize browser to mobile width
2.  Navigate through key pages

Expected Results:

  - All pages are responsive
  - Navigation menu works on mobile
  - Forms are usable on mobile
  - Text is readable
  - Buttons are appropriately sized

### TS-UI-002: Responsive Design - Tablet

Test Steps:

1.  Open application on tablet or resize browser to tablet width
2.  Navigate through key pages

Expected Results:

  - Layout adapts to tablet size
  - All features are accessible
  - Touch targets are appropriate

### TS-UI-003: Responsive Design - Desktop

Test Steps:

1.  Open application on desktop
2.  Navigate through key pages

Expected Results:

  - Layout uses available space effectively
  - All features are accessible
  - Hover states work correctly

### TS-UI-004: Loading States

Test Steps:

1.  Navigate to pages that load data
2.  Observe loading indicators

Expected Results:

  - Loading spinners or skeletons are displayed
  - Users understand that data is loading
  - No blank screens during loading

### TS-UI-005: Error Messages

Test Steps:

1.  Trigger various error conditions (invalid login, network error, etc.)
2.  Observe error messages

Expected Results:

  - Error messages are clear and helpful
  - Error messages are displayed in appropriate locations
  - Users understand how to resolve errors

### TS-UI-006: Success Messages

Test Steps:

1.  Complete various successful actions (create profile, apply to job, etc.)
2.  Observe success messages

Expected Results:

  - Success messages are displayed
  - Messages are clear and confirm the action
  - Messages disappear after appropriate time

### TS-UI-007: Navigation

Test Steps:

1.  Navigate through application using various methods (menu, buttons, links)
2.  Test browser back/forward buttons

Expected Results:

  - Navigation works correctly
  - Browser history is maintained
  - URLs are meaningful and shareable
  - Active page is indicated in navigation

### TS-UI-008: Accessibility - Keyboard Navigation

Test Steps:

1.  Navigate through application using only keyboard
2.  Test tab order and focus states

Expected Results:

  - All interactive elements are keyboard accessible
  - Focus indicators are visible
  - Tab order is logical
  - Forms can be completed with keyboard only

-----

## Performance & Edge Cases

### TS-PERF-001: Large Number of Jobs

Test Steps:

1.  Create or view page with 100+ job postings
2.  Apply filters and search

Expected Results:

  - Page loads within acceptable time
  - Filtering and search remain responsive
  - Pagination works correctly
  - No performance degradation

### TS-PERF-002: Large Number of Skills

Test Steps:

1.  Create veteran profile with 50+ skills
2.  View profile with many skills

Expected Results:

  - Profile saves successfully
  - Skills display correctly
  - UI handles large skill lists gracefully

### TS-PERF-003: Image Upload Performance

Test Steps:

1.  Upload large company logo (5MB+)
2.  Observe compression and upload process

Expected Results:

  - Image is compressed to 85x85px and 5KB
  - Upload completes within reasonable time
  - Compressed image displays correctly

### TS-PERF-004: Concurrent Applications

Test Steps:

1.  Have multiple veterans apply to the same job simultaneously
2.  Verify all applications are recorded

Expected Results:

  - All applications are saved correctly
  - No duplicate applications
  - Application count updates correctly

### TS-EDGE-001: Empty State - No Jobs

Test Steps:

1.  Navigate to jobs page when no jobs exist
2.  Apply filters that return no results

Expected Results:

  - Appropriate empty state message is displayed
  - User understands why no results are shown
  - Clear call-to-action if applicable

### TS-EDGE-002: Empty State - No Candidates

Test Steps:

1.  Sign in as recruiter
2.  Navigate to candidates page when no profiles are published

Expected Results:

  - Appropriate empty state message is displayed
  - Helpful information about how candidates appear
  - Clear explanation of the process

### TS-EDGE-003: Special Characters in Input

Test Steps:

1.  Enter special characters in various form fields
2.  Submit forms

Expected Results:

  - Special characters are handled correctly
  - Data is saved and displayed correctly
  - No SQL injection or XSS vulnerabilities

### TS-EDGE-004: Very Long Text Input

Test Steps:

1.  Enter very long text (10,000+ characters) in text areas
2.  Submit forms

Expected Results:

  - Text is saved correctly
  - UI handles long text appropriately
  - Text is displayed correctly when viewed

### TS-EDGE-005: Network Failure

Test Steps:

1.  Disconnect network
2.  Attempt to perform actions requiring network

Expected Results:

  - Appropriate error messages are displayed
  - User understands the issue
  - Application doesn't crash
  - User can retry when connection is restored

### TS-EDGE-006: Session Expiration

Test Steps:

1.  Let session expire
2.  Attempt to perform authenticated actions

Expected Results:

  - User is prompted to sign in again
  - No data loss occurs
  - User can continue after re-authentication

### TS-EDGE-007: Rapid Clicking

Test Steps:

1.  Rapidly click submit buttons multiple times
2.  Observe behavior

Expected Results:

  - Only one action is processed
  - Duplicate submissions are prevented
  - Loading states prevent multiple clicks
  - No duplicate records created

-----

## Test Coverage Summary

### Functional Areas Covered

  - Authentication & Authorization (8 scenarios)
  - Veteran Profile Management (8 scenarios)
  - Recruiter Profile Management (3 scenarios)
  - Job Posting Management (7 scenarios)
  - Job Search & Discovery (8 scenarios)
  - Job Applications (6 scenarios)
  - Contact Access System (7 scenarios)
  - Content Moderation (3 scenarios)
  - UI/UX Testing (8 scenarios)
  - Performance & Edge Cases (7 scenarios)

**Smoke Tests and User Acceptance Tests (UAT)**

## Table of Contents

1.  Smoke Tests

      - Critical Path Tests
      - Quick Verification Tests
2.  User Acceptance Tests (UAT)

      - Veteran User Journey
      - Recruiter User Journey
      - End-to-End Workflows
      - Business Rule Validation

-----

## Smoke Tests

Purpose: Quick verification that critical functionality works. These tests should run first and complete in under 15 minutes.

When to Run:

  - After each deployment
  - Before running full test suite
  - After critical bug fixes
  - Daily regression checks

Success Criteria: All smoke tests must pass before proceeding with detailed testing.

-----

## Critical Path Tests

### SMOKE-001: Public Access - View Jobs Without Authentication

Priority: Critical Estimated Time: 1 minute

Test Steps:

1.  Open application in browser (incognito/private mode)
2.  Navigate to landing page
3.  Click "Browse Jobs" or navigate to /jobs
4.  Verify jobs are displayed
5.  Click on a job to view details
6.  Verify job information is displayed correctly

Expected Results:

  - Landing page loads without errors
  - Jobs listing page displays active job postings
  - Job detail page shows complete job information
  - No authentication required for viewing
  - No console errors

Failure Impact: HIGH - Core functionality broken, users cannot browse jobs

-----

### SMOKE-002: User Registration - Veteran

Priority: Critical Estimated Time: 2 minutes

Test Steps:

1.  Navigate to sign-up page
2.  Select "veteran" role
3.  Enter unique email address
4.  Enter valid password (meets requirements)
5.  Submit registration form
6.  Verify redirect to profile setup page

Expected Results:

  - Registration form loads correctly
  - Role selection works
  - Password validation works
  - Registration succeeds
  - User is authenticated
  - Redirect to /veteran/profile/setup occurs
  - No errors in console

Failure Impact: HIGH - New users cannot register

-----

### SMOKE-003: User Registration - Recruiter

Priority: Critical Estimated Time: 2 minutes

Test Steps:

1.  Navigate to sign-up page
2.  Select "recruiter" role
3.  Enter unique email address
4.  Enter valid password (meets requirements)
5.  Submit registration form
6.  Verify redirect to profile setup page

Expected Results:

  - Registration form loads correctly
  - Role selection works
  - Password validation works
  - Registration succeeds
  - User is authenticated
  - Redirect to /recruiter/profile/setup occurs
  - No errors in console

Failure Impact: HIGH - New recruiters cannot register

-----

### SMOKE-004: User Sign In

Priority: Critical Estimated Time: 1 minute

Test Steps:

1.  Navigate to sign-in page
2.  Enter valid credentials (existing test account)
3.  Submit sign-in form
4.  Verify redirect to appropriate dashboard

Expected Results:

  - Sign-in form loads correctly
  - Authentication succeeds
  - User is redirected to role-appropriate dashboard
  - Session is established
  - No errors in console

Failure Impact: HIGH - Existing users cannot access system

-----

### SMOKE-005: Create Veteran Profile - Minimum Required

Priority: Critical Estimated Time: 2 minutes

Test Steps:

1.  Sign in as veteran (new account)
2.  Fill minimum required fields:

      - First name
      - Contact email OR phone
      - Military background
      - At least one skill
      - At least one work format
      - At least one job direction
3.  Submit profile form

Expected Results:

  - Profile form loads correctly
  - All required fields are marked
  - Form validation works
  - Profile saves successfully
  - Redirect to dashboard occurs
  - Profile data is saved correctly

Failure Impact: HIGH - Veterans cannot complete onboarding

-----

### SMOKE-006: Create Recruiter Profile - Minimum Required

Priority: Critical Estimated Time: 1 minute

Test Steps:

1.  Sign in as recruiter (new account)
2.  Enter company name (required)
3.  Submit profile form

Expected Results:

  - Profile form loads correctly
  - Company name field is required
  - Profile saves successfully
  - Redirect to dashboard occurs
  - Profile data is saved correctly

Failure Impact: HIGH - Recruiters cannot complete onboarding

-----

### SMOKE-007: Create Job Posting - Basic

Priority: Critical Estimated Time: 2 minutes

Test Steps:

1.  Sign in as recruiter with complete profile
2.  Navigate to "Create Job" page
3.  Fill required fields:

      - Job title
      - Company name
      - Location type
      - Job type
      - Location
      - Description
      - At least one job direction
4.  Submit job form

Expected Results:

  - Create job form loads correctly
  - All required fields are marked
  - Form validation works
  - Job saves successfully
  - Job appears in public job listings
  - Redirect to dashboard occurs

Failure Impact: HIGH - Recruiters cannot post jobs

-----

### SMOKE-008: Apply to Job - Veteran

Priority: Critical Estimated Time: 1 minute

Test Steps:

1.  Sign in as veteran with complete profile
2.  Navigate to jobs page
3.  Click on a job posting
4.  Click "Apply" button
5.  Verify application is created

Expected Results:

  - Job detail page loads correctly
  - Apply button is visible and functional
  - Application is created with "pending" status
  - Success feedback is shown
  - Application appears in veteran's dashboard

Failure Impact: HIGH - Veterans cannot apply to jobs

-----

### SMOKE-009: View Job Applicants - Recruiter

Priority: Critical Estimated Time: 1 minute

Test Steps:

1.  Sign in as recruiter
2.  Navigate to a job with applicants
3.  Click to view applicants
4.  Verify applicants are displayed

Expected Results:

  - Applicants page loads correctly
  - List of applicants is displayed
  - Applicant information is visible
  - Application status is shown

Failure Impact: HIGH - Recruiters cannot manage applicants

-----

### SMOKE-010: Publish Veteran Profile

Priority: Critical Estimated Time: 1 minute

Test Steps:

1.  Sign in as veteran with complete profile
2.  Navigate to publish profile page
3.  Click "Publish Profile" button
4.  Verify profile is published

Expected Results:

  - Publish page loads correctly
  - Profile completeness is validated
  - Publish action succeeds
  - Status changes to "published"
  - Profile becomes visible to recruiters

Failure Impact: HIGH - Veterans cannot make profiles discoverable

-----

## Quick Verification Tests

### SMOKE-011: Database Connection

Priority: High Estimated Time: 30 seconds

Test Steps:

1.  Sign in to application
2.  Navigate to any page that loads data
3.  Verify data loads without errors

Expected Results:

  - Database queries execute successfully
  - No connection errors
  - Data is retrieved correctly

Failure Impact: HIGH - System cannot function without database

-----

### SMOKE-012: Authentication Persistence

Priority: High Estimated Time: 30 seconds

Test Steps:

1.  Sign in to application
2.  Refresh the page
3.  Navigate to another page

Expected Results:

  - User remains authenticated after refresh
  - Session persists
  - No need to sign in again

Failure Impact: MEDIUM - Poor user experience

-----

### SMOKE-013: Protected Routes

Priority: High Estimated Time: 1 minute

Test Steps:

1.  Sign out of application
2.  Attempt to access /veteran/dashboard
3.  Attempt to access /recruiter/dashboard
4.  Verify redirect to sign-in

Expected Results:

  - Unauthenticated users are redirected to sign-in
  - Protected routes are inaccessible
  - After sign-in, user can access appropriate routes

Failure Impact: HIGH - Security vulnerability

-----

### SMOKE-014: Role-Based Access Control

Priority: High Estimated Time: 1 minute

Test Steps:

1.  Sign in as veteran
2.  Attempt to access /recruiter/dashboard
3.  Sign in as recruiter
4.  Attempt to access /veteran/dashboard

Expected Results:

  - Veterans cannot access recruiter routes
  - Recruiters cannot access veteran routes
  - Appropriate error/redirect occurs

Failure Impact: HIGH - Security vulnerability

-----

### SMOKE-015: Basic Search Functionality

Priority: Medium Estimated Time: 1 minute

Test Steps:

1.  Navigate to jobs page
2.  Enter search keyword
3.  Verify results are filtered

Expected Results:

  - Search input works
  - Results are filtered by keyword
  - Search parameter persists in URL

Failure Impact: MEDIUM - Reduced functionality

-----

## User Acceptance Tests (UAT)

Purpose: Verify that the system meets business requirements and works as expected from an end-user perspective. These tests simulate real-world usage scenarios.

When to Run:

  - Before production release
  - After major feature additions
  - For stakeholder approval
  - During release candidate testing

Success Criteria: All UAT tests must pass for system to be considered production-ready.

-----

## Veteran User Journey

### UAT-VET-001: Complete Veteran Onboarding Journey

Priority: Critical Estimated Time: 10 minutes User Story: US-V-001, US-V-002, US-V-003

Test Scenario: A new veteran wants to join the platform and get their profile visible to recruiters.

Test Steps:

1.  Registration

      - Navigate to landing page
      - Click "Sign Up" as veteran
      - Enter email: veteran.test@example.com
      - Enter strong password
      - Submit registration
      - Verify redirect to profile setup
2.  Profile Creation

      - Enter first name: "Іван"
      - Enter last name: "Петренко"
      - Enter city: "Київ"
      - Enter country: "Україна"
      - Enter contact email: veteran.test@example.com
      - Enter contact phone: "+380501234567"
      - Enter military background: "Служив у ЗСУ, досвід у логістиці та управлінні"
      - Select skills: "Лідерство", "Управління проектами", "Логістика"
      - Select preferred job types: "Повна зайнятість", "Контракт"
      - Select work format: "Віддалено", "Офіс"
      - Select job directions: "IT та програмне забезпечення", "Управління проектами"
      - Enter about me: "Шукаю можливості для розвитку в IT сфері"
      - Submit profile form
      - Verify redirect to dashboard
      - Verify profile is saved
3.  Publish Profile

      - Navigate to "Publish Profile" page
      - Verify profile completeness check passes
      - Click "Publish Profile"
      - Verify status changes to "published"
      - Verify success message
4.  Verify Visibility

      - Sign in as recruiter (separate account)
      - Navigate to candidates page
      - Verify veteran profile is visible
      - Verify profile information is displayed correctly

Expected Results:

  - Complete onboarding flow works end-to-end
  - All data is saved correctly
  - Profile becomes discoverable by recruiters
  - No errors occur during the process

Business Value: Veterans can successfully join and make themselves discoverable to employers.

-----

### UAT-VET-002: Veteran Job Search and Application Journey

Priority: Critical Estimated Time: 8 minutes User Story: US-V-006, US-V-007, US-V-008

Test Scenario: A veteran wants to find and apply to relevant job opportunities.

Test Steps:

1.  Browse Jobs

      - Sign in as veteran
      - Navigate to jobs page
      - Verify jobs are displayed
      - Verify job cards show key information
2.  Search Jobs

      - Enter search term: "IT"
      - Verify results are filtered
      - Clear search
      - Select location type filter: "Віддалено"
      - Verify only remote jobs are shown
3.  View Job Details

      - Click on a job posting
      - Verify job detail page loads
      - Verify all job information is displayed
      - Verify company logo is shown (if available)
4.  Apply to Job

      - Click "Apply" button
      - Verify application is created
      - Verify success message
      - Verify button changes to "Applied"
5.  View Application Status

      - Navigate to dashboard
      - Verify application appears in applications list
      - Verify application shows correct status ("pending")
      - Click on application
      - Verify job detail page opens

Expected Results:

  - Veteran can successfully search and find jobs
  - Application process works correctly
  - Application tracking works
  - No errors occur

Business Value: Veterans can discover and apply to job opportunities efficiently.

-----

### UAT-VET-003: Veteran Contact Access Management

Priority: High Estimated Time: 6 minutes User Story: US-V-009

Test Scenario: A veteran receives contact requests from recruiters and manages access to their contact information.

Test Steps:

1.  Receive Contact Request

      - Sign in as recruiter
      - Navigate to candidates page
      - Find veteran profile
      - Click "Request Contact"
      - Verify request is created
2.  View Contact Request

      - Sign in as veteran
      - Navigate to dashboard
      - Verify pending contact request is visible
      - Verify recruiter company name is shown
3.  Approve Contact Request

      - Click "Approve" on contact request
      - Verify request status changes to "approved"
      - Verify success message
4.  Verify Recruiter Access

      - Sign in as recruiter
      - Navigate to candidate profile
      - Verify contact information is now visible
      - Verify email and phone are displayed
      - Verify contact links work (mailto, tel)
5.  Reject Contact Request

      - Sign in as veteran
      - Receive another contact request
      - Click "Reject"
      - Verify request status changes to "rejected"
      - Verify recruiter can see option to re-request

Expected Results:

  - Contact request workflow functions correctly
  - Veterans maintain control over contact information
  - Recruiters gain access only after approval
  - Re-request functionality works

Business Value: Veterans control their privacy while enabling legitimate recruiter contact.

-----

## Recruiter User Journey

### UAT-REC-001: Complete Recruiter Onboarding and Job Posting Journey

Priority: Critical Estimated Time: 12 minutes User Story: US-R-001, US-R-002, US-R-004

Test Scenario: A new recruiter wants to join the platform and post their first job.

Test Steps:

1.  Registration

      - Navigate to landing page
      - Click "Sign Up" as recruiter
      - Enter email: recruiter.test@example.com
      - Enter strong password
      - Submit registration
      - Verify redirect to profile setup
2.  Profile Creation

      - Enter company name: "Tech Solutions UA"
      - Enter industry: "IT Services"
      - Enter company description: "Leading IT company specializing in software development"
      - Enter contact email: recruiter.test@example.com
      - Submit profile form
      - Verify redirect to dashboard
      - Verify profile is saved
3.  Create Job Posting

      - Navigate to "Create Job" page
      - Enter job title: "Senior Project Manager"
      - Enter company name: "Tech Solutions UA"
      - Upload company logo (test image)
      - Verify logo preview appears
      - Verify logo is compressed
      - Select location type: "Віддалено"
      - Select job type: "Повна зайнятість"
      - Enter location: "Київ, Україна"
      - Enter description: "We are looking for an experienced project manager with military background"
      - Select job directions: "IT та програмне забезпечення", "Управління проектами"
      - Add required skills: "Управління проектами", "Лідерство", "Комунікації"
      - Submit job form
      - Verify job is created
      - Verify redirect to dashboard
4.  Verify Job Visibility

      - Sign out
      - Navigate to jobs page (as guest)
      - Verify new job appears in listings
      - Verify company logo is displayed
      - Click on job
      - Verify job detail page shows all information correctly

Expected Results:

  - Complete recruiter onboarding works
  - Job posting creation works with logo upload
  - Job becomes immediately visible to public
  - All job information displays correctly

Business Value: Recruiters can successfully join and post job opportunities.

-----

### UAT-REC-002: Recruiter Candidate Discovery and Contact Journey

Priority: Critical Estimated Time: 10 minutes User Story: US-R-007, US-R-008, US-R-009

Test Scenario: A recruiter wants to find suitable candidates and contact them.

Test Steps:

1.  Browse Candidates

      - Sign in as recruiter
      - Navigate to candidates page
      - Verify published veteran profiles are displayed
      - Verify profile cards show key information
2.  Search and Filter Candidates

      - Enter search term: "IT"
      - Verify results are filtered
      - Select work format filter: "Віддалено"
      - Verify only candidates with remote preference are shown
      - Clear filters
3.  View Candidate Details

      - Click on a candidate profile
      - Verify profile details are displayed
      - Verify contact information is blurred
      - Verify "Request Contact" button is visible
4.  Request Contact Access

      - Click "Request Contact" button
      - Verify request is created
      - Verify button changes to "Request Sent"
      - Verify status shows "pending"
5.  Approve Request (as Veteran)

      - Sign in as veteran
      - Navigate to dashboard
      - Verify contact request is visible
      - Click "Approve"
      - Verify request is approved
6.  View Contact Information

      - Sign in as recruiter
      - Navigate to candidate profile
      - Verify contact information is now visible
      - Verify email is clickable (mailto link)
      - Verify phone is clickable (tel link)

Expected Results:

  - Candidate discovery works correctly
  - Search and filter functionality works
  - Contact request workflow functions properly
  - Contact information access is controlled

Business Value: Recruiters can discover and contact suitable candidates efficiently.

-----

### UAT-REC-003: Recruiter Application Management Journey

Priority: High Estimated Time: 8 minutes User Story: US-R-006

Test Scenario: A recruiter receives applications and manages the hiring process.

Test Steps:

1.  Receive Application

      - Sign in as veteran
      - Apply to a job posted by recruiter
      - Verify application is created
2.  View Applicants

      - Sign in as recruiter
      - Navigate to dashboard
      - Click on job with applicants
      - Navigate to applicants page
      - Verify applicant list is displayed
      - Verify applicant information is shown
3.  Review Applicant Profile

      - Click to expand applicant card
      - Verify full profile information is displayed
      - Verify skills, military background, and preferences are shown
4.  Update Application Status

      - Change application status from "pending" to "reviewed"
      - Verify status updates successfully
      - Change status to "accepted"
      - Verify status updates successfully
      - Verify contact access is automatically granted
5.  Verify Contact Access

      - Navigate to candidates page
      - Find the accepted applicant
      - Verify contact information is visible
      - Verify automatic access was granted

Expected Results:

  - Application management workflow works
  - Status updates function correctly
  - Automatic contact access works for accepted applications
  - All applicant information is accessible

Business Value: Recruiters can efficiently manage applications and hiring process.

-----

## End-to-End Workflows

### UAT-E2E-001: Complete Hiring Workflow

Priority: Critical Estimated Time: 15 minutes

Test Scenario: Complete workflow from job posting to candidate contact.

Test Steps:

1.  Recruiter Posts Job

      - Recruiter creates and publishes job posting
      - Job is visible to public
2.  Veteran Finds and Applies

      - Veteran searches for jobs
      - Veteran finds the posted job
      - Veteran applies to job
      - Application is created
3.  Recruiter Reviews Application

      - Recruiter views applicants
      - Recruiter reviews veteran profile
      - Application and profile information are accessible
4.  Recruiter Accepts Application

      - Recruiter changes application status to "accepted"
      - Status updates successfully
      - Contact access is automatically granted
5.  Recruiter Contacts Veteran

      - Recruiter views candidate profile
      - Contact information is visible
      - Contact links work correctly
6.  Alternative: Contact Request Workflow

      - Recruiter finds veteran in candidates list
      - Recruiter requests contact access
      - Request is created
      - Veteran approves request
      - Contact access is granted
      - Recruiter can view contact information

Expected Results:

  - Complete hiring workflow functions end-to-end
  - Both application-based and direct contact request paths work
  - Contact access is granted appropriately
  - No errors occur throughout the process

Business Value: The core business process works correctly from start to finish.

-----

### UAT-E2E-002: Profile Publishing and Discovery Workflow

Priority: High Estimated Time: 10 minutes

Test Scenario: Veteran publishes profile and recruiter discovers it.

Test Steps:

1.  Veteran Creates Profile

      - Veteran completes profile setup
      - Profile is created but not published
2.  Veteran Publishes Profile

      - Veteran navigates to publish page
      - Veteran publishes profile
      - Profile status changes to "published"
3.  Recruiter Discovers Profile

      - Recruiter navigates to candidates page
      - Published profile appears in list
      - Recruiter searches/filters to find profile
      - Profile is discoverable
4.  Recruiter Views Profile

      - Recruiter clicks on profile
      - Full profile information is displayed
      - Contact information is blurred (no access yet)
5.  Recruiter Requests Contact

      - Recruiter requests contact access
      - Request is created
6.  Veteran Manages Request

      - Veteran views contact request in dashboard
      - Veteran approves request
      - Contact access is granted
7.  Recruiter Accesses Contact

      - Recruiter views profile again
      - Contact information is now visible

Expected Results:

  - Profile publishing workflow works
  - Profile discovery works correctly
  - Contact request workflow functions
  - Privacy controls work as expected

Business Value: Veterans can make themselves discoverable while maintaining privacy control.

-----

## Business Rule Validation

### UAT-BR-001: Content Moderation Rules

Priority: High Estimated Time: 5 minutes

Test Scenario: Verify that prohibited contact information cannot be entered in text fields.

Test Steps:

1.  Veteran Profile - About Me

      - Sign in as veteran
      - Navigate to profile edit
      - Enter email address in "About Me" field
      - Submit form
      - Form validation prevents submission
      - Error message indicates content violation
2.  Veteran Profile - Military Background

      - Enter phone number in "Military Background" field
      - Submit form
      - Form validation prevents submission
      - Error message indicates content violation
3.  Job Description

      - Sign in as recruiter
      - Navigate to create job
      - Enter email address in job description
      - Submit form
      - Form validation prevents submission
      - Error message indicates content violation
4.  Allowed Contact Fields

      - Sign in as veteran
      - Enter email in "Contact Email" field
      - Enter phone in "Contact Phone" field
      - Submit form
      - Form submission succeeds
      - Contact information is saved correctly

Expected Results:

  - Content moderation works in all text fields
  - Contact information is only allowed in designated fields
  - Appropriate error messages are shown

Business Value: Prevents misuse of contact information fields and maintains data quality.

-----

### UAT-BR-002: Profile Completeness Validation

Priority: High Estimated Time: 4 minutes

Test Scenario: Verify that profiles must be complete before publishing.

Test Steps:

1.  Incomplete Profile - Missing Name

      - Create veteran profile without first name
      - Attempt to publish
      - Publish button is disabled
      - Warning message indicates missing name
2.  Incomplete Profile - Missing Skills

      - Create veteran profile without skills
      - Attempt to publish
      - Publish button is disabled
      - Warning message indicates missing skills
3.  Incomplete Profile - Missing Military Background

      - Create veteran profile without military background
      - Attempt to publish
      - Publish button is disabled
      - Warning message indicates missing military background
4.  Complete Profile

      - Complete all required fields
      - Attempt to publish
      - Publish button is enabled
      - Profile can be published successfully

Expected Results:

  - Profile completeness validation works
  - Clear messages indicate what's missing
  - Only complete profiles can be published

Business Value: Ensures quality of published profiles.

-----

### UAT-BR-003: Role-Based Access Control

Priority: Critical Estimated Time: 5 minutes

Test Scenario: Verify that users can only access features appropriate to their role.

Test Steps:

1.  Veteran Access Restrictions

      - Sign in as veteran
      - Attempt to access /recruiter/dashboard
      - Access is denied
      - Redirect to appropriate page
      - Attempt to access /recruiter/jobs/new
      - Access is denied
2.  Recruiter Access Restrictions

      - Sign in as recruiter
      - Attempt to access /veteran/dashboard
      - Access is denied
      - Redirect to appropriate page
      - Attempt to access /publish-profile
      - Access is denied
3.  Appropriate Access

      - Sign in as veteran
      - Access /veteran/dashboard
      - Access granted
      - Access /veteran/profile
      - Access granted
      - Sign in as recruiter
      - Access /recruiter/dashboard
      - Access granted
      - Access /recruiter/jobs/new
      - Access granted

Expected Results:

  - Role-based access control works correctly
  - Users cannot access unauthorized features
  - Appropriate redirects occur

Business Value: Maintains security and data privacy.

-----

### UAT-BR-004: Contact Access Rules

Priority: High Estimated Time: 6 minutes

Test Scenario: Verify that contact access rules are enforced correctly.

Test Steps:

1.  No Access - No Request

      - Recruiter views candidate profile
      - Contact information is blurred
      - "Request Contact" button is visible
2.  Pending Request

      - Recruiter requests contact access
      - Request status is "pending"
      - Recruiter views profile again
      - Contact information remains blurred
      - Status shows "Request Sent"
3.  Approved Request

      - Veteran approves request
      - Recruiter views profile
      - Contact information is visible
      - Email and phone are displayed
4.  Rejected Request

      - Recruiter requests contact (new request)
      - Veteran rejects request
      - Recruiter views profile
      - Contact information remains blurred
      - Option to re-request is shown
5.  Automatic Access via Accepted Application

      - Veteran applies to recruiter's job
      - Recruiter accepts application
      - Contact access is automatically granted
      - No separate approval needed

Expected Results:

  - Contact access rules are enforced
  - Privacy is maintained until access is granted
  - Automatic access works for accepted applications
  - Re-request functionality works

Business Value: Protects veteran privacy while enabling legitimate recruiter contact.


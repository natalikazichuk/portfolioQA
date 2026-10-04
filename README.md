# QA NK

Interactive QA Portfolio by Natali.

## Concept
QA NK is a portfolio that demonstrates QA skills through an interactive product experience: Bug Hunt, QA Quest, case studies, API testing, AI/LLM evaluation, and QA documentation.

## Current projects
- VeteranJobPortal — primary QA case study
- Snake Eye — web/data project
- SchoolKingdoms — educational platform

## Roadmap
- [ ] Portfolio shell
- [ ] Project case studies
- [ ] Bug Hunt
- [ ] Bug Museum
- [ ] QA Lab
- [ ] AI Lab
- [ ] Recruiter Mode
- [ ] Responsive/mobile QA
- [ ] Deployment

## Stack
React + Vite, JavaScript, CSS, JSON data.

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
```bash
npm run build   # output in dist/
```
Publish `dist/` (e.g. GitHub Actions or the `gh-pages` branch). Navigation uses URL hashes (`#recruiter`), so direct links work on static hosting.

## Content
Edit `src/data/profile.json` (summary, highlights, tools, CV/GitHub/email links). Contact buttons stay hidden until their URL is set.

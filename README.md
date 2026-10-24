# KYC Onboarding Demo

A multi-step identity verification flow built with React and Vite, inspired by the KYC onboarding used in fintech and payment apps.

This is a frontend-only demo. It does not send, store or verify anything.

**Live demo:** coming soon

## Features so far

- Four-step flow with a progress bar that highlights the current step: Personal info, Address, ID upload, Review
- Back and Next navigation (Back is disabled on the first step, Next on the last)
- **Personal info:** full name, email and date of birth
- **Address:** street, city, country (Qatar, India, United Kingdom, United States) and postal code
- **ID upload:** ID type (Passport, National ID, Driver's license) and an image file picker that shows the selected file name
- Controlled inputs, with all form state held in `App` and passed down to each step as props

## Roadmap

- [x] One form per step with Next/Back
- [x] Address form
- [x] ID upload step
- [ ] Review screen and status (step 4 is a placeholder for now)
- [ ] Form validation with clear error messages
- [ ] Deploy to Vercel

## Tech stack

React · Vite · JavaScript · CSS · oxlint

## Project structure

```
src/
  App.jsx                      step state and form state
  components/
    ProgressBar.jsx
    PersonalInfoForm.jsx
    AddressForm.jsx
    IdUploadForm.jsx
```

## Run locally

```
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

> Fake data only. Use made-up details and any random picture for the ID step. Never enter real personal information or a real ID.

## License

MIT

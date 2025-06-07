# Frontend Task List

This document outlines the step-by-step tasks to transform the current Vite + React + TypeScript template into the minimum viable product described in [plan.md](./plan.md).

## 1. Project Setup
1. Install dependencies with `npm install`.
2. Configure TypeScript and Vite for absolute imports if necessary.
3. Set up basic linting and formatting tools (ESLint, Prettier).
4. Ensure testing works with `npm test` using Vitest and React Testing Library.

## 2. Application Skeleton
1. Add React Router for page navigation.
2. Create placeholder pages for:
   - Home / Payment page
   - Success and cancel result pages
   - Admin dashboard
   - Terms of Service and Privacy Policy
3. Create a simple navigation layout shared across pages.

## 3. API Configuration
1. Create a configuration file to load the API base URL at build time (e.g., via `import.meta.env`).
2. Write a small API helper module for calling backend endpoints.
3. Verify the frontend can reach a dummy endpoint during development.

## 4. Payment Flow
1. Implement the payment page form for entering invoice amount and customer details.
2. Call the backend endpoint to create a Stripe Checkout session.
3. Redirect the user to the URL returned by the backend.
4. Build success and cancel pages that read the checkout session result.

## 5. Client Branding
1. Define a branding configuration interface (logo URL, colors, business name).
2. Load branding data from the backend based on the current client.
3. Apply branding styles dynamically to the payment page and success page.

## 6. Processing Fees
1. Display the processing fee (flat or percentage) before checkout.
2. Show the total charge including the fee.
3. Ensure the total sent to the backend matches what is displayed.

## 7. Admin Features
1. Implement login/basic auth for the admin area.
2. Build forms to create and edit client pages, including default invoice amount and branding options.
3. Provide a view of recent payments with filters and CSV export.
4. Add a page to record manual payments.

## 8. Content Pages
1. Add static pages for Terms of Service and Privacy Policy.
2. Link to these pages from the footer of the payment page and admin area.

## 9. Deployment
1. Set up the build command `npm run build` to produce assets for S3/CloudFront.
2. Verify environment variables are correctly replaced for each deployment stage.
3. Test the production build locally with `npm run preview`.

## 10. Final Testing
1. Write unit and integration tests for key components and API calls.
2. Manually test the full payment flow with Stripe's test mode.
3. Check responsive layout across desktop and mobile.

Completing these tasks will result in a fully functional frontend that meets the MVP requirements outlined in [plan.md](./plan.md).

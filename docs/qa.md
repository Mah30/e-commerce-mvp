# QA Strategy

The first QA approach for this project is manual testing. Automated tests will be added later after the main flows are understood.


## QA Goals

- Understand business rules before testing.
- Test small features one at a time.
- Document expected result and actual result.
- Report bugs with clear steps to reproduce.
- Keep regression checklists as the app grows.

## Testing Types To Practice

- Smoke Testing: quick check that the app starts and main pages work.
- Happy Path Testing: test the expected successful flow.
- Negative Testing: test invalid data and forbidden actions.
- Exploratory Testing: explore the app looking for unexpected behavior.
- Regression Testing: retest important flows after changes.
- Accessibility Testing: check keyboard, labels, readability, and contrast.

## First Manual QA Focus

Start with Public Product Listing because it is beginner-friendly and does not require authentication.

Observe:

- Products appear correctly.
- Prices are readable and correct.
- Inactive products are hidden.
- Out-of-stock products are handled clearly.
- Layout works on desktop and mobile.

## QA Notes Format

For each test, write:

- Test Scenario
- Test Data
- Steps to Reproduce
- Expected Result
- Actual Result
- Severity
- Priority
- Screenshot or notes



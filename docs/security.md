# Security Notes

This project handles user accounts, orders, and admin actions, so security must be considered from the beginning.


## Authentication

- Passwords must be hashed with `bcrypt`.
- JWT should be stored in HTTP-only cookies.
- `GET /me` must not return password or token secrets.
- Logout should clear the cookie.

## Authorization

- Backend must check if a user is logged in before protected actions.
- Backend must check if a user has `admin` role before admin actions.
- Frontend can hide admin buttons, but this is not enough for security.

## Input Validation

- Use Zod later to validate request bodies.
- Validate email format, password length, product price, stock, and quantity.
- Reject unexpected or invalid values.

## Cookies And CORS

- Configure CORS only for trusted frontend origins.
- Cookies should use secure options appropriate for development and production.
- Because cookies are used, CSRF considerations should be reviewed before production.

## API Safety

- Do not return `passwordHash`.
- Do not expose internal error details to users.
- Use Helmet later for safer HTTP headers.
- Add rate limiting on auth routes later.

## Security QA Risks

- User accesses admin route.
- User views another user's order.
- Token remains valid after logout because cookie was not cleared.
- API returns sensitive user data.
- Invalid quantity or price is accepted.



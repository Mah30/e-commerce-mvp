# Manual QA Checklist

Use this checklist during manual testing. Add more items as the project grows.


## Smoke Testing

- [ ] App opens without crashing
- [ ] Backend API responds
- [ ] Database connection works
- [ ] No critical error appears in browser console
- [ ] No critical error appears in backend logs

## Authentication

- [ ] User can register with valid data
- [ ] User cannot register with invalid email
- [ ] User cannot register with weak password
- [ ] User can login with valid credentials
- [ ] User cannot login with wrong password
- [ ] User can logout
- [ ] `GET /me` returns current user without sensitive data

## Authorization

- [ ] Logged-out user cannot access protected routes
- [ ] Normal user cannot access admin routes
- [ ] Backend blocks admin actions for non-admin users
- [ ] User cannot view another user's orders

## Products

- [ ] Public product listing shows active products
- [ ] Inactive products are hidden from public listing
- [ ] Product details page shows correct information
- [ ] Product price displays correctly
- [ ] Product stock displays or affects UI correctly
- [ ] Admin can create product
- [ ] Admin can update product
- [ ] Admin can deactivate product

## Cart

- [ ] User can add product to cart
- [ ] Same product is not duplicated incorrectly
- [ ] User can update item quantity
- [ ] Quantity cannot be less than `1`
- [ ] Quantity cannot exceed stock
- [ ] User can remove item from cart
- [ ] User can clear cart

## Checkout And Orders

- [ ] Checkout creates an order
- [ ] Checkout reduces stock
- [ ] Checkout clears cart after success
- [ ] Order stores product price history
- [ ] User can view own orders
- [ ] Admin can view all orders
- [ ] Admin can update order status

## UI/UX

- [ ] Main pages are easy to understand
- [ ] Buttons have clear labels
- [ ] Forms show helpful error messages
- [ ] Loading states are visible when needed
- [ ] Empty states are clear
- [ ] Layout works on desktop
- [ ] Layout works on mobile

## Accessibility

- [ ] Inputs have labels
- [ ] Buttons are reachable by keyboard
- [ ] Focus state is visible
- [ ] Text contrast is readable
- [ ] Images have useful alt text

## Security

- [ ] Password is never returned by the API
- [ ] JWT is stored in HTTP-only cookie
- [ ] Invalid input is rejected
- [ ] Protected routes return proper status codes
- [ ] Admin routes require admin role

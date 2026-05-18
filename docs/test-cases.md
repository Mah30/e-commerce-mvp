# Sample Manual Test Cases

These are initial examples. More test cases should be added as each feature is implemented.


## TC-001: View Public Product Listing

- Test Scenario: Visitor views active products.
- Preconditions: Products exist in the database.
- Test Data: Active product with name, price, stock, and image.
- Steps:
  1. Open the product listing page.
  2. Observe the product cards.
- Expected Result: Active products are visible with correct name, price, and image.
- Priority: High

## TC-002: Hide Inactive Product From Public Listing

- Test Scenario: Visitor should not see inactive products.
- Preconditions: At least one product has `isActive = false`.
- Steps:
  1. Open the public product listing page.
  2. Search visually for the inactive product.
- Expected Result: Inactive product is not displayed.
- Priority: High

## TC-003: Register With Valid Data

- Test Scenario: New user creates an account.
- Test Data: Valid name, unique email, valid password.
- Steps:
  1. Open register page.
  2. Fill valid data.
  3. Submit the form.
- Expected Result: User account is created and user receives success feedback.
- Priority: High

## TC-004: Login With Wrong Password

- Test Scenario: User attempts login with invalid password.
- Test Data: Existing email and wrong password.
- Steps:
  1. Open login page.
  2. Enter existing email.
  3. Enter wrong password.
  4. Submit the form.
- Expected Result: Login fails with a clear error message.
- Priority: High

## TC-005: Add Product To Cart

- Test Scenario: Logged-in user adds product to cart.
- Preconditions: User is logged in and product is active with stock greater than `0`.
- Steps:
  1. Open product details page.
  2. Click add to cart.
  3. Open cart page.
- Expected Result: Product appears in cart with correct quantity and price.
- Priority: High

## TC-006: Prevent Quantity Greater Than Stock

- Test Scenario: User tries to add more items than available stock.
- Preconditions: Product stock is `2`.
- Test Data: Quantity `3`.
- Steps:
  1. Open cart or product page.
  2. Try to set quantity to `3`.
- Expected Result: System blocks the action and shows a clear message.
- Priority: High

## TC-007: Checkout Creates Order

- Test Scenario: User checks out successfully.
- Preconditions: User is logged in and cart has valid items.
- Steps:
  1. Open cart page.
  2. Click checkout.
  3. Confirm order.
- Expected Result: Order is created, stock is reduced, and cart is cleared.
- Priority: High

## TC-008: Normal User Cannot Access Admin Product Creation

- Test Scenario: User without admin role attempts admin action.
- Preconditions: User is logged in with `user` role.
- Steps:
  1. Try to open admin product creation page or call admin route.
- Expected Result: Access is blocked with `403 Forbidden` or redirected safely.
- Priority: High

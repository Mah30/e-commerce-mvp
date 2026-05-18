# Business Rules

This file describes the first business rules for the E-commerce MVP.


## Roles

- A `user` can register, login, browse products, use the cart, checkout, and view only their own orders.
- An `admin` can manage products, categories, stock, and order status.
- Admin actions must be protected in the backend, not only hidden in the frontend.

## Product Rules

- Public users can see only active products.
- A product must have a name, price, stock quantity, category, and active/inactive status.
- Product price must be greater than or equal to zero.
- Product stock must be greater than or equal to zero.
- Deactivated products should not appear in the public product listing.
- Admins should deactivate products instead of deleting them when possible.

## Category Rules

- A category can have many products.
- A product should belong to one category.
- Category names should be clear and unique.

## Cart Rules

- A logged-in user can add active products to the cart.
- The same product should not appear as duplicate cart rows for the same user.
- Cart quantity must be at least `1`.
- Cart quantity cannot be greater than available product stock.
- Users can update quantity, remove one item, or clear the cart.

## Checkout And Order Rules

- Checkout should create one order with one or more order items.
- Checkout should save the product price at the time of purchase in `OrderItem`.
- Checkout should reduce product stock.
- Checkout should clear the cart only after the order is created successfully.
- Checkout should use a Prisma transaction to avoid partial data.
- Users can view only their own orders.
- Admins can view all orders and update order status.


# API Plan

This file lists planned backend routes for the E-commerce MVP. The exact route names can change during implementation.


## Auth Routes

- `POST /api/auth/register`: create user account.
- `POST /api/auth/login`: login and set HTTP-only cookie.
- `POST /api/auth/logout`: clear authentication cookie.
- `GET /api/auth/me`: return current logged-in user without sensitive data.

## Product Routes

- `GET /api/products`: list active products for public users.
- `GET /api/products/:id`: show active product details.
- `POST /api/admin/products`: admin creates product.
- `PUT /api/admin/products/:id`: admin updates product.
- `PATCH /api/admin/products/:id/deactivate`: admin deactivates product.

## Category Routes

- `GET /api/categories`: list categories.
- `POST /api/admin/categories`: admin creates category.
- `PUT /api/admin/categories/:id`: admin updates category.

## Cart Routes

- `GET /api/cart`: get current user's cart.
- `POST /api/cart/items`: add product to cart.
- `PATCH /api/cart/items/:id`: update cart item quantity.
- `DELETE /api/cart/items/:id`: remove cart item.
- `DELETE /api/cart`: clear cart.

## Order Routes

- `POST /api/orders/checkout`: create order from cart.
- `GET /api/orders`: get current user's orders.
- `GET /api/admin/orders`: admin gets all orders.
- `PATCH /api/admin/orders/:id/status`: admin updates order status.

## Response Rules

- Never return `passwordHash`.
- Return clear validation errors.
- Return `401 Unauthorized` when the user is not logged in.
- Return `403 Forbidden` when the user is logged in but lacks permission.
- Return `404 Not Found` when a resource does not exist or should not be visible.



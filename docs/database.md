# Database Plan

Database: PostgreSQL  
ORM: Prisma


## Planned Models

## User

Fields planned:

- `id`
- `name`
- `email`
- `passwordHash`
- `role`: `user` or `admin`
- `createdAt`
- `updatedAt`

Relationships:

- One user can have one cart.
- One user can have many orders.

## Category

Fields planned:

- `id`
- `name`
- `createdAt`
- `updatedAt`

Relationships:

- One category can have many products.

## Product

Fields planned:

- `id`
- `name`
- `description`
- `price`
- `stock`
- `imageUrl`
- `isActive`
- `categoryId`
- `createdAt`
- `updatedAt`

Relationships:

- One product belongs to one category.
- One product can appear in many cart items and order items.

## Cart

Fields planned:

- `id`
- `userId`
- `createdAt`
- `updatedAt`

Relationships:

- One cart belongs to one user.
- One cart has many cart items.

## CartItem

Fields planned:

- `id`
- `cartId`
- `productId`
- `quantity`
- `createdAt`
- `updatedAt`

Rules:

- A cart should not contain duplicate rows for the same product.
- Quantity must be positive.

## Order

Fields planned:

- `id`
- `userId`
- `status`
- `total`
- `createdAt`
- `updatedAt`

Relationships:

- One order belongs to one user.
- One order has many order items.

## OrderItem

Fields planned:

- `id`
- `orderId`
- `productId`
- `productName`
- `unitPrice`
- `quantity`
- `subtotal`

Rules:

- `unitPrice` should store the product price at checkout time.
- `productName` can help preserve order history if the product name changes later.

## Important Database Risks

- Stock can become negative if checkout validation is weak.
- Order data can become partial without a transaction.
- Product price history can be lost if `OrderItem.unitPrice` is not saved.
- Authorization bugs can expose another user's orders.


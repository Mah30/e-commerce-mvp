# E-commerce CRUD MVP

This project is a learning-focused Full Stack E-commerce MVP. The goal is to build a small but realistic application where users can browse products, manage a cart, checkout, and view orders, while admins manage products, categories, stock, and order status.

Explicacao em portugues: este projeto serve para aprender desenvolvimento Full Stack e QA passo a passo. Primeiro entendemos regras, fluxos e riscos; depois implementamos pequenas partes com cuidado.

## Tech Stack

- Frontend: React, JavaScript, Vite
- Backend: Node.js, Express
- Database: PostgreSQL
- ORM: Prisma
- Authentication: JWT with HTTP-only cookies
- QA: manual testing first; Vitest, Supertest, and Playwright later
- CI/CD: GitHub Actions later

Explicacao em portugues: React sera a interface, Express sera a API, PostgreSQL guardara os dados e Prisma ajudara o backend a conversar com o banco usando codigo JavaScript.

## Roles

- `user`: can browse products, manage cart, checkout, and view own orders.
- `admin`: can manage products, categories, stock, and order status.

Explicacao em portugues: role define o tipo de permissao. Mesmo que o frontend esconda botoes de admin, o backend tambem precisa bloquear usuarios sem permissao.

## Main Features

- Authentication: register, login, logout, `GET /me`
- Products: public listing, product details, admin CRUD, deactivation
- Categories: admin management
- Cart: add item, update quantity, remove item, clear cart
- Orders: checkout, create order, view order history, update order status
- Security: password hashing, cookies, validation, authorization, safe API responses

## Documentation

- [Business rules](docs/business-rules.md)
- [Database plan](docs/database.md)
- [API plan](docs/api.md)
- [Security notes](docs/security.md)
- [QA strategy](docs/qa.md)
- [Manual QA checklist](docs/qa-checklist.md)
- [Test cases](docs/test-cases.md)
- [Bug report template](docs/bug-report-template.md)
- [Regression checklist](docs/regression-checklist.md)
- [Accessibility checklist](docs/accessibility-checklist.md)
- [Definition of Done](docs/definition-of-done.md)

## Current Status

Initial documentation phase. No backend, frontend, dependencies, database schema, or automated tests have been implemented yet.

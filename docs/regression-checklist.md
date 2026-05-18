# Regression Checklist

Use this checklist after changes to confirm important existing behavior still works.


## Authentication Regression

- [ ] Register still works
- [ ] Login still works
- [ ] Logout still works
- [ ] `GET /me` still returns the current user
- [ ] Password is still hidden from API responses

## Authorization Regression

- [ ] Protected user routes still require login
- [ ] Admin routes still require `admin` role
- [ ] Normal user still cannot perform admin actions

## Product Regression

- [ ] Public listing still shows active products
- [ ] Inactive products remain hidden
- [ ] Product details still load correctly
- [ ] Admin product creation still works
- [ ] Admin product update still works
- [ ] Admin product deactivation still works

## Cart Regression

- [ ] Add to cart still works
- [ ] Update quantity still works
- [ ] Remove item still works
- [ ] Clear cart still works
- [ ] Quantity still cannot exceed stock

## Checkout Regression

- [ ] Checkout still creates order
- [ ] Stock still decreases after checkout
- [ ] Cart still clears after successful checkout
- [ ] Order history still shows correct data

## UI/UX Regression

- [ ] Main pages still render on desktop
- [ ] Main pages still render on mobile
- [ ] Important buttons are still visible
- [ ] Error messages are still understandable

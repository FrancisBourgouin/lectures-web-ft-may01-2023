# Shopping Cart !

Takes in an array of items, and will list subtotal, total, tax, amount of items

```jsx
  const calculateCart = (cart) => {
    return subtotal, total, .. // not possible

    return {subtotal, total, ..}
  }
```

# Data structures

## Cart (Array)

```jsx
  const cart = [ITEM, ITEM, ITEM,...]
```

## Item (Object)

```jsx
const item = {
  name: String,
  price: Number,
  quantity: Number,
  id: Number, // optional
  isTaxable: Boolean, // optional
};
```

## CartInformation (Object)

```jsx
const cartInformation = {
  subtotal: Number,
  total: Number,
  tax: Number,
  amountOfItems: Number,
  currentCart: Cart, // optional
};
```

## taxAmount (Number)

```jsx
const QCTAX = 0.14975;
const ONTAX = 0.13;
```

## calculateCart (Function)

```jsx
// cart is Cart Type
// couponList (Stretch / Id)
// Taxes QCTAX / ONTAX is taxAmount (constant)
const calculateCart = (cart, taxAmount) => {
  return cartInfo; // AS CartInformation
};
```

## What if?

- What if the cart is empty? => Throw error (HEY TRY TO SHOP FIRST YOU DUM DUM)
- What if we had an invalid product in the cart? => Skip over the bad item => valid calculatedCart (Normally would throw error)
- What if there is no cart? => Throw error (HEY WHERES YOUR CART)
- What if taxAmount is invalid? => Throw error (WHY NO GIVE ME A NUMBER)
- What if taxAmount is not there? => Throw error (WHERES THE TAX AMOUNT LEBOWSKI)

- What if I had a valid cart and a valid taxAmount? => valid calculatedCart

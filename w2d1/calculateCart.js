const priceRound = (price) => {
  return Math.round(price * 100) / 100;
};

const calculateCart = (cart, taxAmount) => {
  const calculatedCart = {
    subtotal: 0,
    total: 0,
    tax: 0,
    amountOfItems: 0,
  };

  if (!cart) {
    throw new Error("HEY WHERE'S YOUR CART !?!?");
  }
  if (cart.length === 0) {
    throw new Error("MAYBE YOU SHOULD SHOP FIRST YOU DUM DUM !");
  }
  if (!taxAmount && taxAmount !== 0) {
    throw new Error("NO TAX NO BUENO");
  }
  if (typeof taxAmount !== "number") {
    throw new Error("WHAT KIND OF TAX IS THAT?!");
  }

  // const parsedNumber = Number(taxAmount)
  // Number.isNaN(parsedNumber)

  for (const item of cart) {
    if (typeof item === "object") {
      // console.log(item.price);
      calculatedCart.subtotal += item.price * item.quantity;
      calculatedCart.amountOfItems += item.quantity;
    }
  }

  calculatedCart.tax = priceRound(calculatedCart.subtotal * taxAmount);
  calculatedCart.total = priceRound(calculatedCart.tax + calculatedCart.subtotal);

  return calculatedCart;
};

module.exports = calculateCart;

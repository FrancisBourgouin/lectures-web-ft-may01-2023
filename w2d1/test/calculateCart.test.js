const calculateCart = require("../calculateCart");
const { expect } = require("chai");
// const chai = require("chai")
// const expect = chai.expect

const SAMPLETAX = 0.14975;

describe("Testing the calculateCart function", () => {
  it("should throw an error if there is no cart", () => {
    const expectedErrorMessage = "HEY WHERE'S YOUR CART !?!?";
    const throwyFunction = () => calculateCart(null, SAMPLETAX);

    expect(throwyFunction).to.throw(expectedErrorMessage);
  });
  it("should throw an error if the cart is empty", () => {
    const expectedErrorMessage = "MAYBE YOU SHOULD SHOP FIRST YOU DUM DUM !";
    const throwyFunction = () => calculateCart([], SAMPLETAX);

    expect(throwyFunction).to.throw(expectedErrorMessage);
  });
  it("should skip over an invalid product in the cart", () => {
    const sampleCart = [
      {
        name: "Pollo",
        price: 9.99,
        quantity: 1000,
      },
      "potato",
    ];
    const expectedResult = {
      subtotal: 9990,
      total: 11486.0,
      tax: 1496.0,
      amountOfItems: 1000,
    };
    const result = calculateCart(sampleCart, SAMPLETAX);

    expect(result.subtotal).to.equal(expectedResult.subtotal);
    expect(result.total).to.equal(expectedResult.total);
    expect(result.tax).to.equal(expectedResult.tax);
    expect(result.amountOfItems).to.equal(expectedResult.amountOfItems);
  });
  it("should throw an error if the taxAmount is not there", () => {
    const sampleCart = [
      {
        name: "Pollo",
        price: 9.99,
        quantity: 1000,
      },
    ];
    const expectedErrorMessage = "NO TAX NO BUENO";

    const throwyFunction = () => calculateCart(sampleCart, undefined);

    expect(throwyFunction).to.throw(expectedErrorMessage);
  });
  it("should throw an error if the taxAmount is not valid", () => {
    const sampleCart = [
      {
        name: "Pollo",
        price: 9.99,
        quantity: 1000,
      },
    ];
    const expectedErrorMessage = "WHAT KIND OF TAX IS THAT?!";

    const throwyFunction = () => calculateCart(sampleCart, "🐔🐔🐔");

    expect(throwyFunction).to.throw(expectedErrorMessage);
  });
  it("should return the calculatedCart object is everything is valid", () => {
    const sampleCart = [
      {
        name: "Pollo",
        price: 9.99,
        quantity: 1000,
      },
      {
        name: "Potato",
        price: 1.99,
        quantity: 10,
      },
    ];
    const expectedResult = {
      subtotal: 10009.9,
      total: 11508.88,
      tax: 1498.98,
      amountOfItems: 1010,
    };
    const result = calculateCart(sampleCart, SAMPLETAX);

    expect(result).to.deep.equal(expectedResult);
  });
});

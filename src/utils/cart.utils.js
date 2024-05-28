// This function is used for adding item to cart.
// 1. Checks if it has the productToAdd already in the cart
// IF it does:
// It will increase the quantity of the product that we searched for and return new array with the modified cart item
// ELSE:
// It returns a new array with a new cart item
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

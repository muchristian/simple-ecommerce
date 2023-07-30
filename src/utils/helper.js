export function getCartTotal(cart) {
  if (cart.length === 0) {
    return 0;
  } else {
    let totalPrice = 0;
    cart.forEach((item) => (totalPrice += parseInt(item.price)));
    return Math.round(totalPrice * 100) / 100;
  }
}

export function getTotalSavedProducts(products) {
  if (products.length === 0) {
    return 0;
  } else {
    return products.length;
  }
}

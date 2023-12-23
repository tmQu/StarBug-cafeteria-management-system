export const calculateToppingPrice = (toppingList) => {
  let totalPrice = 0;
  const toppingPrice = 15000;

  toppingList.forEach((top) => {
    const itemPrice = toppingPrice * top.quantity;
    totalPrice += itemPrice;
  });

  return totalPrice;
};

export const calTotalPrice = (cartList) => {
  let totalPrice = 0;

  cartList.forEach((item) => {
    const itemPrice =
      (item.price + item.size.sizePrice + calculateToppingPrice(item.topping)) *
      item.quantity;
    totalPrice += itemPrice;
  });

  return totalPrice;
};

export const calTotalFee = (cartList) => {
  const ratio = 0.1;
  let totalFee = 0;

  cartList.forEach((item) => {
    const itemPrice = item.price * item.quantity * ratio;
    totalFee += itemPrice;
  });

  return totalFee;
};

export const calTotalVoucher = () => {
  return 0.1;
};

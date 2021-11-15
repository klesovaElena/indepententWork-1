export const processCartData = (cartData) => {
  cartData.forEach((item) => {
    if (item.oldPrice > item.price) {
      item.discount = item.oldPrice - item.price;
    }
  });
  cartData.forEach((item) => {
    delete item.oldPrice;
  });
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  return cartData;
};

export const makeCartItemCopy = (cartData) => {
  let cartItemCopy = cartData.slice(0, 1);
  //cartItemCopy[0].addedIngredients[0].count = 2;

  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  return cartItemCopy;
};

export const calcSum = (cartData) => {
  let totalCount = cartData.reduce((total, item) => total + item.count, 0);
  let totalSum = cartData.reduce(
    (total, item) => total + item.price * item.count, 0);
  let resultOne = cartData.filter((item) => item.type === "pizza");
  let pizzaCount = resultOne.reduce((total, item) => total + item.count, 0);
  let pizzaSum = resultOne.reduce(
    (total, item) => total + item.price * item.count, 0);
  let resultTwo = cartData.filter((item) => item.type === "water");
  let waterCount = resultTwo.reduce((total, item) => total + item.count, 0);
  let waterSum = resultTwo.reduce(
    (total, item) => total + item.price * item.count, 0);
  let resultThree = cartData.filter((item) => item.type === "other");
  let otherCount = resultThree.reduce((total, item) => total + item.count, 0);
  let otherSum = resultThree.reduce(
    (total, item) => total + item.price * item.count, 0);
  //TODO: посчитать суммы по типам товаров и их цены
  return {
    total: { count: totalCount, sum: totalSum },
    water: { count: waterCount, sum: waterSum },
    pizza: { count: pizzaCount, sum: pizzaSum },
    other: { count: otherCount, sum: otherSum }
  };
};

export const getCartItemsByDate = (cartData, date) => {
  date = new Date(date);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  for (let i = 0; i < cartData.length; i++) {
    let dateTwo = new Date(cartData[i].date);
    let dayTwo = dateTwo.getDate();
    let monthTwo = dateTwo.getMonth();
    let yearTwo = dateTwo.getFullYear();
    if (dayTwo == day && monthTwo == month && yearTwo == year) {
      cartData = cartData.filter((item) => item.date == cartData[i].date);
    }
  }

  //TODO: выбрать покупки сделанные за выбранную дату
  return cartData;
};

export const repeatOrder = (cartData, date) => {
  let newOrder = getCartItemsByDate(cartData, date);
  newOrder = newOrder.slice();

  newOrder.forEach((item) => {
    item.date = "2021-11-15";
    item.id = item.id + 1;
  });
  cartData = newOrder.concat(cartData);
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  return cartData;
};

export const addItem = (cartData, item) => {
  item.count += 1;
  //TODO: увеличить кол-во товара в полученном элементе
  return cartData;
};

export const checkPromo = (cartData) => {
  let totalSum = cartData.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  let checkTotal = totalSum > 1000 ? true : false;
  let bigPosition = (cartData) => {
    for (let i = 0; i < cartData.length; i++) {
      let sum = cartData[i].count * cartData[i].price;
      if (sum > 500) return true;
      if (sum < 500) return false;
    }
  };
  let notDiscount = (cartData) => {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].oldPrice < cartData[i].price) return true;
      if (cartData[i].oldPrice > cartData[i].price) return false;
    }
  };
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
  return {
    total: checkTotal,
    oneBigPosition: bigPosition,
    notDiscounted: notDiscount
  };
};

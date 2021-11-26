export const sum = (f, s) => {
    //TODO: Должны складываться только строки и числа
    // Постарайтесь сложить как можно больше пар и обойти NaN случаи
    if (parseFloat(f)) {
      f = parseFloat(f);
    } else {
      f = 0;
    }
    if (parseFloat(s)) {
      s = parseFloat(s);
    } else {
      s = 0;
    }
    return f + s;
  };
  
  export const showPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
  
    //TODO: Привести цену к виду: 10.00 р.
    // округлять до копеек в сторону магазина
    return Math.ceil(discountedPrice).toFixed(2) + "р.";
  };
  
  export const findSuccess = (bankResponse) => {
    //TODO: Проверьте что в строке есть 'Success' без учёта регистра
    bankResponse = bankResponse.toLowerCase();
    return bankResponse === "Success" ? "Yes" : "No";
  };
  
  export const dateToString = (date) => {
    //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
    let today = new Date();
    date = new Date(date);
    if (
      date.getDate() == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
    ) {
      return "Сегодня";
    } else if (
      date.getDate() - 1 == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
    ) {
      return "Вчера";
    } else if (
      date.getDate() + 1 == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
    ) {
      return "Завтра";
    } else {
      return `${date.getFullYear()} : ${date.getMonth() + 1} : ${date.getDate()}`;
    }
  };
  
  export const sort = (data) => {
    //TODO: Отсортируйте массив строк по алфавиту
    let dataStr = data.join(", ");
    dataStr = dataStr.toLowerCase();
    data = dataStr.split(", ");
    return data.sort();
  };
  

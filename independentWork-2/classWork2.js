//TODO: Вывести  пользователей, у которых в адресе есть число, к примеру
// {street: "8 March"}
// Вывод: "По адресу {...} живут пользователи {...}"
export const getUsersAddress = (usersData) => {
  let arr = usersData.filter((item) => isFinite(item.address.street.slice(0,1)));
  let names = arr.map(item => item.name);
  let streets = arr.map(item => item.address.street);
  return result = `По адресу ${streets} живут пользователи ${names}`;
};

//TODO: Вывести имена пользователей и количество их бонусов за все года, удвоить их
// Вывод: "Пользователи {...} получат соответственно {...} бонусов
export const getDoubleUserBonuses = (usersData) => {
  let names = usersData.map(item => item.name);
  let Bonuses = usersData.map(item => item.userBonuses);
  let doubleBonuses = Bonuses.map(item => ((item[2019] + item[2020] + item[2021])*2));
  return DoubleUserBonuses = `Пользователи ${names} получат соответственно ${doubleBonuses} бонусов`;
};

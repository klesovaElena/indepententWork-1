//Можно изменить свойства объекта, который является константой, но не сам объект.
const user = {
    name:"John"
};
user.name = "Pete";//Выполнится
alert(user.name);
/*Объекты*/
/* 1. Создайте объект в котором будут храниться суммы денег  пользователей;
	Напишите код, который выведет сумму всех денег у пользователей;*/
var bank = {
  'Вася': 6000,
  'Петя': 2000,
  'Лена': 11000,
  'Коля': 5000,
  'Настя': 3000    
};

function getSum(obj) {
  let total = 0;
  for (var key in obj) {
    total += obj[key];
  }
  return total;
} 
/*2. Берем этот же объект. Нужно вывести имя пользователя у которого больше всех денег.*/
function getUserMaxMoney(obj) {
  var max = 0;
  var money = 0;
  var user = '';
  for (var key in obj) {
    money = obj[key];
    if (max < money) {
      max = money;
      user = key;
    }
  }
  return user;
} 

document.write('Сумма всех денег у пользователей - ' + getSum(bank) + '</br>');
document.write('Пользователь у которого больше всех денег - ' + getUserMaxMoney(bank) + '</br>');

/*
3. Создайте функцию , которая получает  объект и умножает все численные свойства на 2. 
	Например:
	var menu = {   width: 300,   height: 400,   title: "My title" };
*/
var menu = {   
  width: 300,   
  height: 400,   
  title: "My title" 
};
function multiply(obj) {
  for (var key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiply(menu));
/*Задача 1
	Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
 */

document.write('Задача 1' + '</br>');
var arr1 = ['a', 'b', 'c'];
var arr2 = [1, 2, 3];
document.write('Объединеный массив [' + arr1.concat(arr2) + '] </br>');

/* Задача 2*/
document.write('Задача 2' + '</br>');
var a = ['admin', 'admin', 'admin'];
var b = ['1', '2', '3'];
var c = a.push(b);
document.write(c + '</br>')

/*
Задача 3
 - Напишите код который  запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива;
*/
document.write('Задача 3' + '</br>');
var arr = [];
var sum = 0;
while (true) {
  let a = prompt ('Введите число');
  if (a == null || a == '' || isNaN(a)) {
    break;
  } else {
    arr.push(a);
    sum = sum + +a;
  }
};
document.write('Массив = [' + arr + ']</br>');
document.write('Сумма = ' + sum + '</br>');

/*
Задача 4
  Cоздать массив с данными;  
  Написать функцию которая ищет значение Value в массиве и возвращает его index, 
  есть он есть, если нету то -1;
	Например arr = [«user», 3, 4, «b»];
	find(arr, «user»); Должен вернуть 0.
*/
document.write('Задача 4' + '</br>');
var mas = ["user", 3, 4, "b"];
function find (mas, val) {
  return mas.indexOf(val);
}
document.write('Массив = ' + mas + '</br>');
document.write('Value = ' + 'user' + '</br>');
document.write('Index = ' + find(mas, 'user') + '</br>');


var mas1 = ["user", 3, 4, "b"];
function find (mas1, val) {
  if(mas1.indexOf){return mas.indexOf(val);}
  return -1;
}
var result = find(mas1, 'b');
console.log(result);

/* */
var arr3 = ["user", 3, 4, "b"];
for (var a3 = 0; a3 < arr3.length; a3++){
  document.write(arr3[a3] + ' ' + arr3.indexOf(arr3[a3]) + '</br>');
}

var arr4 = ["user", 3, 4, "b"];
var arr5 = [];
arr4.filter(item => {
  if(item.length === 4) {
    arr5.push(item);
  }
});
console.log(arr5);

/*Данн массив из 7 элементов. В каждом массиве посчитать кол-во не четных эл. на не четных индексах */
var arr6 = [1, 3, 4, 5, 6];
/*for (var i6 = 0; i6 < arr6.length; i6++) {
  if (arr6[i6] % 2) {
    if (i6 % 2) {

    }
  }
}*/
arr6.filter((item, index) => {
  if(index % 2) {
    if (item % 2) {
      console.log(index, item);  
    }
  }
});
/*Отфильтровать элементвы массива, которые строки */
var arr7 = ['aaaa', 3, 4, 5, 6, 7];
arr7.filter((item) => {
  if (typeof item  === 'string') {
    console.log(item);
  }
});
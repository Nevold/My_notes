/* String.prototype */

str.charAt(index); // Метод charAt() возвращает указанный символ из строки
str.charCodeAt(index); //Метод charCodeAt() возвращает числовое значение Юникода
str.concat(string2, string3); //Метод concat() объединяет текст из двух или более строк и возвращает новую строку.
str.includes(searchString, position); //Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.
str.indexOf(searchValue, fromIndex); //Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.
str.match(regexp); //Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
str.repeat(count); //Метод repeat() конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.
str.replace('regexp|substr', 'newSubStr|function', flags); //Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.
str.search([regexp]); // Метод search() выполняет поиск сопоставления между регулярным выражением и этим объектом String.
str.slice(beginIndex, endIndex); //Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
str.split(separator, limit); //Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
str.substring(indexA, indexB); //Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки
str.toLowerCase(); //Метод toLowerCase() возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.
str.toUpperCase(); //Метод toUpperCase() возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр
str.toString(); //Метод toString() возвращает строку, представляющую указанный объект.
str.trim(); //Метод trim() удаляет пробельные символы с начала и конца строки.
str.valueOf(); //Метод valueOf() возвращает примитивное значение объекта String

/*Array.prototype*/

old_array.concat(value1, value2); // Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов
arr.entries(); //Метод entries() возвращает новый объект итератора массива Array Iterator, содержащий пары ключ / значение для каждого индекса в массиве.
arr.every(callback(currentValue, index, array), thisArg); //Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции
arr.fill(value, start, end); //Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением
let newArray = arr.filter(callback(element, index, array), thisArg); //Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
arr.find(callback, thisArg); //Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции
arr.findIndex(callback, thisArg); //Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции.
let newArray = arr.flat(depth); //Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth
arr.forEach(function callback(currentValue, index, array) {
  /*your iterator*/
}, thisArg); //Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
Array.from(arrayLike, mapFn, thisArg); //Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта
arr.includes(searchElement, (fromIndex = 0)); //Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false
arr.indexOf(searchElement, (fromIndex = 0)); //Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет
Array.isArray(obj); //Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является
arr.join(separator); //Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку
let new_array = arr.map(function callback(currentValue, index, array) {
  /* Возвращает элемент для new_array*/
}, thisArg); //Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
Array.of(element0, element1); //Метод Array.of() создаёт новый экземпляр массива Array из произвольного числа аргументов, вне зависимости от числа или типа аргумента
arr.pop(); //Метод pop() удаляет последний элемент из массива и возвращает его значение
arr.push(element1, elementN); //Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива

array.reduce(callback, initialValue); //Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение
array.reverse(); //Метод reverse() на месте обращает порядок следования элементов массива
arr.shift(); //Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива
arr.unshift(element1, elementN); //Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива
arr.slice(begin, end); //Метод slice() возвращает новый массив, содержащий копию части исходного массива
arr.some(callback(element, index, array), thisArg); //Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции
arr.sort(compareFunction); //Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив
array.splice(start, deleteCount, item1, item2); //Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые
arr.toString(); //Метод toString() возвращает строковое представление указанного массива и его элементов
arr.values(); //Метод values() возвращает новый объект итератора массива Array Iterator, содержащий значения для каждого индекса в массиве

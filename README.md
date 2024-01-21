___
# МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ПРОФЕСИОНАЛЬНОГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»
### *** <center>Лабораторная работа №1. «Основы языка JavaScript». </center> *** <br><p align="right">Подготовил студент направления подготовки 01.03.02 «Прикладная математика и информатика»<br> Института естественных наук и техносферной безопасности<br> Зураев Дмитрий Бакенович.</p><br><p align="right">Научный руководитель:<br> Соболев Евгений Игоревич</p><br> <center>Южно-Сахалинск 2023 г.</center>
___
### <center>Введение</center>
<p align="justify">JavaScript (JS) - это высокоуровневый язык программирования, который используется для создания интерактивных и динамических веб-страниц. JS является одним из трех основных языков, используемых веб-браузерами (наряду с HTML и CSS), и позволяет добавлять функциональность и взаимодействие на веб-страницах.
Лабораторная работа по JavaScript (JS) предоставляет возможность познакомиться с одним из самых популярных языков программирования, используемых для разработки веб-приложений.</p>

### <center>Цели</center>
<p align="justify">Ознакомиться с основными концепциями и возможностями JavaScript. Изучить синтаксис языка, работу с переменными, операторами, условиями, циклами и функциями. Также поработать с форматом типа Date</p>

### <center>Задачи</center>
<p align="justify">Применить технологию JS.</p>

____________________
## <center>_Решение_</center>
1.	Создайте переменную `str` и присвойте ей значение 'hdfgv'. Обращаясь к отдельным символам этой строки выведите на экран символ 'h', символ 'd', символ 'v'.
```javascript
var str = 'hdfgv';
alert(str[0]);
alert(str[1]);
alert(str[4]);
```
2.	Напишите скрипт, который считает количество секунд в часе.
```javascript
var secondsInHour = 60*60;
alert(`2) Количество секунд в часе: ${secondsInHour}`);
```
3.	Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки:
```javascript
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);
```
```javascript
var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);
```
4.	Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода `alert`.
```javascript
var num = 3;
alert("4) " + num);
```
5.	Создайте переменные `a=10` и `b=2`. Выведите на экран их сумму, разность, произведение и частное (результат деления).
```javascript
var a = 10;
var b = 2;
alert(`5) Числа ${a} и ${b}.\nСумма: ${a+b}; Разность: ${a-b}; Произведение: ${a*b}; Частное: ${a/b}`);
```
6.	Создайте переменные `c=15` и `d=2`. Просуммируйте их, а результат присвойте переменной `result`. Выведите на экран значение переменной `result`.
```javascript
var c = 15;
var d = 2;
var result = c + d;
alert("6) " + result);
```
7.	Создайте переменные `a=10`, `b=2` и `c=5`. Выведите на экран их сумму.
```javascript
var a = 10, b = 2, c = 5;
alert(`7) Сумма a+b+c = ${a+b+c}`);
```
8.	Создайте переменные `a=17` и `b=10`. Отнимите от a переменную `b` и результат присвойте переменной `c`. Затем создайте переменную `d`, присвойте ей значение 7. Сложите переменные `c` и `d`, а результат запишите в переменную `result`. Выведите на экран значение переменной `result`.
```javascript
var a = 17;
var b = 10;
var c = a - b;
var d = 7;
var result = c + d;
alert("8) " + result);
```
9.	Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
```javascript
var secondsInDay = secondsInHour*24;
var secondsInMonth = secondsInDay*30;
alert(`9) Количество секунд в часе: ${secondsInHour}\nКоличество секунд в сутках: ${secondsInDay}\nКоличество секунд в месяце: ${secondsInMonth}\n`);
```
10.	Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
```javascript
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
alert(`10) Текущее время: ${hour}:${minute}:${second}`);
```
11.	Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
```javascript
var number = 12;
alert("11) " + Math.pow(number, 2)); ;
```
12.	Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
```javascript
alert("12) " +
    // Входной массив
    [4,9,144]
      // Оставляем только чётные числа
      .filter(element => !(element % 2))
      // Считаем квадратный корень и записываем в аккумулятор
      .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
   );
```
13.	Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
```javascript
var applePrice = 1.15;
var orangePrice = 2.30;
alert("13) В JavaScript, при выполнении операции сложения чисел с плавающей точкой,может возникнуть проблема с точностью. Это связано с тем, что числа с плавающей точкой представлены в двоичной системе, и некоторые числа не могут быть точно представлены в этой системе. \nНаш результат будет немного неточным = " + (applePrice + orangePrice));
```
14.	Какое будет выведено значение: `let x = 5; alert(x++);` ?
```javascript
//fourteen тк сначала вывел икс потом увелич.
alert("14) let x = 5; alert(x++); - Получится 5");
```
15.	Чему равно такое выражение: `[ ] + false - null + true` ?
```javascript
//fifteen при преобраз. типов
alert(`15) [ ] + false - null + true - будет ${[] + false - null + true} Not a Number, то есть не число`);
```
16.	Что выведет этот код: `let y = 1; let x = y = 2; console.log(x);` ?
```javascript
//sixteen справа налево
alert(`16) let y = 1; let x = y = 2; console.log(x); - выведет Два`);
```
17.	Чему равна сумма `[ ] + 1 + 2`?
```javascript
//seventeen пуст. масс. преобр. в пуст. стр.
alert(`17) [ ] + 1 + 2 - будет 12`);
```
18.	Создайте переменные `a6`, `a7`, `a8`, `a9`, `a10`. Поместите в них результат выражений:<br>
5 % 3,<br>
3 % 5,<br>
5 + '3',<br>
'5' - 3,<br>
75 + 'кг'
```javascript
var a6 = 5 % 3; //остаток от деления 5 на 3 равно 2
var a7 = 3 % 5; //остаток от деления 3 на 5 равно 3
var a8 = 5 + '3'; //будет равно "53"
var a9 = '5' - 3; //строка "5" будет преобразована в число, будет равно 2
var a10 = 75 + 'кг'; //равно "75кг"
```
19.	Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную `height`), шириной 10см (в числовую переменную `width`), значение площади должно хранится в числовой переменной `s`.
```javascript
var height = 23;
var width = 10;
var s = height*width;
alert(`19) Площадь прямоугольника = высоту ${height} * ширину ${width} = ${s} см2`);
```
20.	Напиши скрипт, который находит объем цилиндра высотой 10м (переменная `heightC`) и диаметром основания 4м (`dC`), результат поместите в переменную `v`.
```javascript
var heightC = 10;
var dC = 4;
var v = heightC*Math.PI*(dC*dC/4);
alert(`20) Объем циллиндра = V=h*PI*d2/4 = ${v} см3`);
```
21.	Даны размер ипотечного кредита (`S` — 2 млн.руб), процентная ставка (`p`  — 10%), кол-во лет (`years` — 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной `perepl`.
```javascript
var S = 2_000_000;
var p = 10;
var years = 5;
var perepl = S*(p*years/100); //2млн - 10 процентов в год
alert(`21) ${perepl} переплата при сумме в ${S} млн на ${years} лет под ${10} процентов`);
```
22.	Определите переменные `str`, `num`, `flag` и `txt` со значениями «Привет», 123, true, «true». При помощи оператора определения типа убедитесь, что переменных принадлежат типам: `string`, `number`, `boolean`.
```javascript
var str = "Привет";
var num = 123;
var flag = true;
var txt = "true";
alert(`str = \"Привет\" - тип ${typeof(str)}\nnum = 123 - тип ${typeof(num)}\nflag = true - тип ${typeof(flag)}\ntxt = \"true\" - тип ${typeof(txt)}`);
```
23.	Дано число, необходимо вернуть противоположное число.
```javascript
var num = prompt("Введите число, а я выведу противоположное");
alert(`Противоположное число числу ${num}: ${-num}`);
```
## <center>_Вывод_</center>
Таким образом, я изучил основные понятия и возможности в JavaScript. Ознакомился с синтаксисом языка, работал с переменными, операторами, условиями, циклами и функциями. Также поработал с форматом типа Date.

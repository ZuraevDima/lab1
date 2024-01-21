//one
var str = 'hdfgv';
alert(str[0]);
alert(str[1]);
alert(str[4]);
//two
var secondsInHour = 60*60;
alert(`2) Количество секунд в часе: ${secondsInHour}`);
//three
var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);
//four
var num = 3;
alert("4) " + num);
//five
var a = 10;
var b = 2;
alert(`5) Числа ${a} и ${b}.\nСумма: ${a+b}; Разность: ${a-b}; Произведение: ${a*b}; Частное: ${a/b}`);
//six
var c = 15;
var d = 2;
var result = c + d;
alert("6) " + result);
//seven
var a = 10, b = 2, c = 5;
alert(`7) Сумма a+b+c = ${a+b+c}`);
//eight
var a = 17;
var b = 10;
var c = a - b;
var d = 7;
var result = c + d;
alert("8) " + result);
//nine
var secondsInDay = secondsInHour*24;
var secondsInMonth = secondsInDay*30;
alert(`9) Количество секунд в часе: ${secondsInHour}\nКоличество секунд в сутках: ${secondsInDay}\nКоличество секунд в месяце: ${secondsInMonth}\n`);
//ten
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
alert(`10) Текущее время: ${hour}:${minute}:${second}`);
//eleven
var number = 12;
alert("11) " + Math.pow(number, 2)); 
//twelve
alert("12) " +
    // Входной массив
    [4,9,144]
      // Оставляем только чётные числа
      .filter(element => !(element % 2))
      // Считаем квадратный корень и записываем в аккумулятор
      .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
   ); // 14
//thirteen
var applePrice = 1.15;
var orangePrice = 2.30;
alert("13) В JavaScript, при выполнении операции сложения чисел с плавающей точкой,может возникнуть проблема с точностью. Это связано с тем, что числа с плавающей точкой представлены в двоичной системе, и некоторые числа не могут быть точно представлены в этой системе. \nНаш результат будет немного неточным = " + (applePrice + orangePrice));
//fourteen тк сначала вывел икс потом увелич.
alert("14) let x = 5; alert(x++); - Получится 5");
//fifteen при преобраз. типов
alert(`15) [ ] + false - null + true - будет ${[] + false - null + true} Not a Number, то есть не число`);
//sixteen справа налево
alert(`16) let y = 1; let x = y = 2; console.log(x); - выведет Два`);
//seventeen пуст. масс. преобр. в пуст. стр.
alert(`17) [ ] + 1 + 2 - будет 12`);
//eighteen
var a6 = 5 % 3; //остаток от деления 5 на 3 равно 2
var a7 = 3 % 5; //остаток от деления 3 на 5 равно 3
var a8 = 5 + '3'; //будет равно "53"
var a9 = '5' - 3; //строка "5" будет преобразована в число, будет равно 2
var a10 = 75 + 'кг'; //равно "75кг"
//nineteen
var height = 23;
var width = 10;
var s = height*width;
alert(`19) Площадь прямоугольника = высоту ${height} * ширину ${width} = ${s} см2`);
//twenty
var heightC = 10;
var dC = 4;
var v = heightC*Math.PI*(dC*dC/4);
alert(`20) Объем циллиндра = V=h*PI*d2/4 = ${v} см3`);
//twenty-one
var S = 2_000_000;
var p = 10;
var years = 5;
var perepl = S*(p*years/100); //2млн - 10 процентов в год
alert(`21) ${perepl} переплата при сумме в ${S} млн на ${years} лет под ${10} процентов`);
//twenty-two
var str = "Привет";
var num = 123;
var flag = true;
var txt = "true";
alert(`str = \"Привет\" - тип ${typeof(str)}\nnum = 123 - тип ${typeof(num)}\nflag = true - тип ${typeof(flag)}\ntxt = \"true\" - тип ${typeof(txt)}`);
//twenty-three
var num = prompt("Введите число, а я выведу противоположное");
alert(`Противоположное число числу ${num}: ${-num}`);

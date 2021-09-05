/*Пустой объект («пустой ящик») можно создать, используя один из двух вариантов синтаксиса:
let user = new Object; // синтаксис "конструктор объекта"
let user = {} // синтаксис "литерал объекта"  */
/*let u = {
    name: Avgu,
    age: 134,
}*/
/*let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};*/

//alert( bag.apple ); // 5, если fruit="apple", если нет, то undefined
/*var us = prompt()
var as = prompt()
var na = prompt()
var obj = {
  us,
  as,
  na,
}
for (let key in obj)
{
  document.write (key,obj[key],' ')
}
console.log(2/0);*/

/*const q = Number(prompt('Сколько элементов будете вводить?' , 5)) //--вместо Number можно использовать унарный плюс(+x)
var mas = []
var nomber = 1;
for (var i = 0; i<q; i++)
{
   mas[i] = prompt('Введите элемент', nomber);
   nomber +=1;
};
document.write(mas);
let xa = 10;
console.log(xa);          console.log – не простая
                          переменная. Это выражение, возвращающее свойство log переменной
                          console*/          



function randoma()
{
  console.log (Math.random() * (100 - 99 + 1) + 99)     // можно (Math.random() + 99)  - это одно  и тоже
  var x = {
    lastname:'Nor', 
    firsname:'Tom',
  }
  //console.log(x.lastname)
  for (var key in x)
  {
    console.log(x[key])   // nor , tom , если вывести x - то будет полный объект
  }
}




function sum_one_stroc()   // Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
{
  var x = [] ;
  var sum = 0;
  const col = Number(prompt("Какое количетсво элементов будет в массиве", 2));
  for (var i = 0; i < col; i++)
  {
    x[i] = Number(prompt('Введите элемент', 2));
    if (x[i]%2 < 1)                                 // Деление с остатком возвращает 0 - если четное число и 1 - если нечёт.
    {
      sum += Math.pow(x[i], 2);
    }
    else{
      continue
    }
  } 
  document.write(sum);

  // console.log(
  //   // Входной массив
  //   [1, 4, 3, 0, 4, 5, 4]
  //     // Оставляем только чётные числа
  //     .filter(element => !(element % 2))
  //     // Считаем квадратный корень и записываем в аккумулятор
  //     .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
  //  ); // 6
}



function MasSortir ()                  //Сортирует массив??
{
   var mas = [];
   var x = Number(prompt('Какое количество элементов?', 5));
   for (var i = 0; i < x; i++)
   {
      mas[i]=Number(prompt('Введите элемент', i)) // Также можно парснуть через Intparse или Parseint
   }
   var q = 1;
   for (var w = 0; w<mas.length; w++)
   {
      if (mas[w] > mas[q])
      {
         vrem = mas[w];
         mas[w] = mas[q];
         mas[q] = vrem;
      }
      q +=1;
   }
   document.write(mas);
}


function mega_mas()
{
  var mas = [];
  var varia = Number(promt('Кол-во элементов'));
  for (var i = 0; i<varia; i++)
  {
    mas[i]=Number(promt("Введете элемент"));
    
  }
}

function rgb(a,b,c)            // нужно вывести строку в ргб формате
{
  var a = Number(prompt());
  var b = Number(prompt());
  var c = Number(prompt());
  var mas = [];
  mas[0]=a;
  mas[1]=b;
  mas[2]=c;
  console.log('rgb',mas); 
}

// var test = [                               - хз что это такое!
//   "rgb(249,115,0)",
//   "rgba(14,48,71,0.99)",
// ];
// console.log(test.map(function (a) {
// return a.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/, 'rgba$1,0.4)');
// }));

// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
let square = x => {return x*x}         // стрелочная функция
let vivod = () => {var mas =[]; let a = Number(prompt('Кол-во',3)); let values; let y = 1;
  for (var i = 0; i<a; i++){values=Number(prompt( '',y)); mas[i]=square(values); y++} console.log(mas)}
console.log(vivod())
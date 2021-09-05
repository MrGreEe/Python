/*document.write('allo ')   - выводит на страницу web
const x = 50
document.write(typeof x)    - выводит тип переменной
console.log()               - выводит на консоль
parseInt                    - преобразует в другой тип переменную
prompt                      - открывает окно с запрос о вводе значения 
arguments                   – глобально доступный массив 
// инициализация массива
var mas = new Array(1,2,3) // или var mas = []     первый элемент имеет индекс 0
console.log(mas)*/
/*if (mas == 1)  
{
    alert ('good') // это называется инструкцией
}*/
// var searchForm = document.search;

// var x = prompt ('input text', 100)
// ТАКЖЕ === - ЗДЕСЬ СРАВНЕНИЕ БЕЗ ПРИВЕДЕНИЯ , А == - СРАВНЕНИЕ ПОСЛЕ ПРИВЕДЕНИЯ К ОБЩЕМУ ТИПУ ДАННЫХ
// var searchForm = document.write()
// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss ); // true, если нажата OK           --- преобразует значение к строке

//функцию можно присваивать: var x = function(){ иструкции };
//                                                                                                  document.querySelector('.') - получение объекта
//let nax = document.getElementById("scr");


//document.querySelector('button').onclick = myClick; //код говорит - схвати со страницы кнопку, повесить на нее свойство onclick и при клике выполнить функцию
document.querySelector('button').addEventListener('click', myClick)


function myClick()
{
    //console.log('work')
    // get input
    // в инпутах свойство value отвечает за текст введенный пользователем
    let a = document.querySelector('.ii').value ;   // если добавить атрибут name в html - input то вывод в JS не будет работать
    console.log(a);
    alert(a);
    document.querySelector('.out').innerHTML = a; // после точки идет свойство с которым хотим работать(innerHTML) 
    document.querySelector('.out').innerHTML += a  // " += " добавляет текст, а " = "стирает предыдущий
}

// треугольник
let x = () => {let a = '#'; let b = '#'; let i = 1; while (i < 8) {console.log(b); b +=a; i++}}
console.log(x())
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Рекурсия (Функция вызывает саму себя)
function isEven(n) {
  if (n == 0)
  return true;
else if (n == 1)
  return false;
else if (n < 0)
  return isEven(-n);
else
  return isEven(n - 2);
}
//let n = Number(prompt());
//console.log(isEven(n));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Считаем бомбы (Посчитать кол-во опред. символов в строке)         console.log('sdafsdf'.charAt(5) - выведет пятый элемент строки                           
function countChar(string , n){
  let kolvo = 0;
  for (let i = 0; i<string.length; i++){
    if (string[i]==n){
      kolvo+=1;
    }
  }
  console.log(kolvo)
}
function charBt(){
  let stri = prompt();
  let n = prompt();
  console.log(countChar(stri, n));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function findSolution(target) {
    function find(start, history) {
    if (start == target)
    return history;
    else if (start > target)
    return null;
    else
    return find(start + 5, "(" + history + " + 5)") ||
    find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
    }
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 // Корреляция - мера зависимости между величинами (2 события и 4 исхода : 1)нет, нет 2) да, нет 3) нет, да 4) да, да)
 let correlation = (mas) => { 
     let i = 0;
     let correlation1 = (mas[3]*mas[0] - mas[1]*mas[2])/
     (Math.sqrt((mas[1]+mas[3])*
                (mas[0]+mas[2])*
                (mas[2]+mas[3])*
                (mas[0]+mas[1])));
     console.log (correlation1);
 }
console.log(correlation([76,9,4,1]))

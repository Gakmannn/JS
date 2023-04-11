let a = 'bar'
let b = 'foo'
let c = b + a

let p = document.querySelector('#p')

// Задание 1
/* Напишите скрипт, который запрашивает у пользователя подтверждение некоторого действия (используя 
  диалог confirm) и после его ответа выводит сообщение 
  «Подтверждено» или «Отменено».*/
/*
let result = confirm('Подтвердить?')
// let confirmed = result ? 'Подтверждено' : 'Отменено'
alert(result ? 'Подтверждено' : 'Отменено')
// alert(confirmed)
*/

// Задание 2
/*Напишите скрипт, который запрашивает у пользователя пароль подтверждения некоторого действия. 
Допускается три возможных пароля («Step», «Web» 
и  «JavaScript»). После ввода пароля скрипт должен 
вывести сообщение «Подтверждено» или «Отменено»
*/
function checkPassword() {
  const pass = prompt('Введите пароль')
  if (pass == 'Step' || pass == 'Web' || pass == 'JavaScript') {
    return true
  }
  return false 
}
// console.log(`
// ##################
// ${checkPassword()}
// ##################

// `)


// Задание 3
/*Напишите скрипт, который запрашивает у пользователя число «х», проверяет его на принадлежность диапазону 0..100 и выводит соответствующее сообщение 
(например, 10 — принадлежит, –10 — не принадлежит, 
0 — принадлежит, 200 — не принадлежит)*/

// Задание 4
/*Напишите скрипт, который запрашивает у пользователя два числа «х» и «у», сравнивает их величины 
и  выводит одно из сообщений: «x > y», «x< y» или 
«x=y» в зависимости от введенных данных*/

// Задание 5
/*Напишите скрипт, который запрашивает у пользователя число «х», «ранжирует» его по диапазонам 0..100, 
101..200, 201..300 и выводит сообщение о принадлежности или несоответствии ни одному из них (например, 
30 принадлежит диапазону 0..100; 250 — диапазону 
201..300; –10 или 500 — ни одному)*/


// Задание 6
/*Напишите скрипт, который запрашивает у пользователя цифру и выводит ее название: 0 — «ноль», 1 —
«единица», 2 — «двойка» и т.д. Если переменная не 
является цифрой, выводится сообщение «не цифра»*/

// const month = parseInt(prompt('Введите количество месяцев') as string)
// const month = prompt('Введите количество месяцев')
// month = prompt('Введите количество месяцев')

// let i = 0
// Сначала проверяем условие, потом выполняем тело цикла
// Выполнение тела цикла повторяется, пока условие истинно
// Как только условие становится ложным, программа выходит из тела цикла
// while (i < month) {
//   console.log(`платеж за ${i+1} месяц`, '1000 р')
//   // console.log('платеж за ' + i + ' месяц', '1000 р')
//   i = i + 1
//   //  i++
//   //  i+=1
// }

// предположим, что пользователь ввёл 2 месяца
// первый цикл i=0, month=2
// 0 < 2 - true
// выполняем тело цикла
// второй цикл i=1, month=2
// 1 < 2 - true
// выполняем тело цикла
// третий цикл i=2, month=2
// 2 < 2 - false
// тело цикла не выполняется, программа выполняет команды, которые расположены ниже цикла


// Сначала выполняем тело цикла один раз, а потом проверяем условие
// Выполнение тела цикла повторяется, пока условие истинно
// Как только условие становится ложным, программа выходит из тела цикла
// do {
//   console.log(`платеж за ${i + 1} месяц`, '1000 р')
//   i++
// } while (i<month)

// Пример, когда применять do while
// let number = -1
// let noCorrect = false
// do {
//   if (noCorrect) {alert('Введено неверное число')}
//   number = parseInt(prompt('Введите число от 0 до 10') as string)
//   noCorrect = true
// } while (number<0 || number>10)
// alert('Введено верное число')


// for (инициализация; условие; выражение)
//   тело цикла

// 1 шаг первым делом устанавливается итератор (i=0)
// 2 шаг сразу после этого проверяеся условие (i<month)
// 3 шаг если условие истинно, выполняется тело цикла. Если ложно,- выход из цикла
// 4 шаг если условие было истинно, то после выполнения тела цикла, исполняется блок изменения итератора (i++)
// 5 шаг повторяются шаги 3-4 пока условие не станет ложным
// for (let i = 0; i < month; i++) {
//   console.log(`платеж за ${i + 1} месяц`, '1000 р')
// }

// for без инициализации 
// let i = 1 // i не равна 0 и получается в результате вычислений или обращения к базе данных
// const month =2
// for (; i < month; i++) {
//   console.log(`платеж за ${i + 1} месяц`, '1000 р')
// }

// for без условия получается бесконечный цикл
// let i = 1 // i не равна 0 и получается в результате вычислений или обращения к базе данных
// for (; ; i++) {
//   console.log(`платеж за ${i + 1} месяц`, '1000 р')
// }

// for без вырвжения становится аналогом while
// let i = 1 // i не равна 0 и получается в результате вычислений или обращения к базе данных
// const month =2
// for (; i<month ;) {
//   console.log(`платеж за ${i + 1} месяц`, '1000 р')
//   i++
// }

// for со сложным выражением
// const month = parseInt(prompt('Введите количество месяцев') as string)
// for (let i = 0, toLast = month; i < month && i>=0; i++, toLast-=2) {
//   console.log(`платеж за ${i + 1} месяц, осталось ${toLast - 1} месяцев`, '1000 р')
// }

// два варианта создания массива
const arr0 = []
const arr1 = new Array()

// создали массив с данными
// const array = [0,2,3,5,7,8,9]
// console.log(array)
// array.push(10)
// console.log(array)
// array.pop()
// console.log(array)

// // for in выводит индексы итерируемого объекта
// console.log('####### indexes ########')
// for (let i in array) {
//   console.log(i)
// }

// // for of выводит значения итерируемого объекта
// console.log('####### values ########')
// for (let el of array) {
//   console.log(el)
// }

let i = 0
while (true) {
  i++
  if (i == 3 || i == 5) {
    continue // переходит к проверке условия цикла, не выполняя дальнейшие инструкции тела цикла
  }
  console.log(i)

  if (i > 10) {
    break // прекращение цикла
  }
}

let variable = 8
variable = 10
variable = 15
console.log('variable', variable)

const constant = 20

const data = variable > 20 ? true : false

// function nameOfFunction(argument1, argument2) {
//   body
// }

// function functionWithoutArguments() {
//   body
// }

function sum(a: number, b = 10) {
  return a + b
}
function div(a: number, b: number) {
  if (!b) {
    return 'на ноль делить нельзя'
  }
  return a / b
}
function voided() {
  123
}

console.log(sum(5, 20))
console.log(div(10, 2))
console.log(div(10, 1))
console.log('voided()', voided())
console.log('voided', voided)
let returnOfVoided = voided()
let sumOf5and20 = sum(5, 20)

// for (let x=0,y=10; x!=y; x++, y--) {
//   console.log(`x=${x}, y=${y}, x+y=${x+y}`)
//   console.log('x='+x+', y='+y)
// }
// const name1 = 'Igor'
// const letter = `Hello, ${name1} 
// fnlkgfldk sdfsf sdsd fsd
// ${new Date().toLocaleString()}
// `
// const letter2 = 'Hello, ' + name1 + 
// '\nfnlkgfldk sdfsf sdsd fsd \n' + 
// new Date().toLocaleString()


// console.log(letter)
// console.log(letter2)


// function myFunc (arr) {
//   console.log(arguments)
//   const max = Math.max(...arr)
//   console.log(max)
// }

// myFunc([1,2,3,5,48,58])

function random(min,max) {
  return Math.round(Math.random() * (max - min) + min)
}

// console.log(Math.round(Math.random()*(10-8)+8))

// rand(0-1)*(max - min) + min

// console.log(random(55,80))

function logArguments(x) {
  console.log(arguments)
  console.log("x = " + x)
  // for (i = 0; i < arguments.length; i++) {
  //   console.log("argument" + i + " = " + arguments[i])
  // }
  // получаем индексы объекта
  for (let i in arguments) {
    console.log("argument" + i + " = " + arguments[i])
  }
  // получаем элементы объекта
  for (let el of arguments) {
    console.log(el)
    // console.log("argument" + i + " = " + arguments[i])
  }
}

const arr = [1,2,3,5]
arr.length
const arr2 = Array(1,2,3,5)

// @ts-ignore
logArguments(111,1,15)

// function max() {
//   if (arguments.length == 0) return undefined
//   let ret = arguments[0]
//   console.log('ret init', ret)
//   for (i = 1; i < arguments.length; i++) {
//     console.log(`ret ${ret}, el ${arguments[i]}`)
//     if (arguments[i] > ret) {
//       ret = arguments[i]
//       console.log(`new ret ${ret}`)
//     }
//   }
//   return ret;
// }

// console.log(max(12,12,15,18,17,2))


let ato1 = 1
let ato2 = 1
let ato3 = 1
let ato4 = 1
console.log('global', ato1, ato2, ato3, ato4)

if (ato1==ato2) {
  const ato1 = 2
  let ato2 = 2
  let ato3 = 2
  ato4 = 2
  ato2 = 7
  console.log('local if', ato1, ato2, ato3, ato4)
}

for(let i=0;i<2;i++) {
  const ato1 = 3
  let ato2 = 3
  ato3 = 3
  let ato4 = 3
  if (ato4 == 3) {
    ato3 = 88
  }
  console.log('local for', ato1, ato2, ato3, ato4)
}

function localScope(x) {
  let ato1 = 10
  let ato2 = 10
  let ato3 = 10
  let ato4 = 10
  console.log('local func', ato1, ato2, ato3, ato4)
  return x + ato4
}

ato1 = localScope(12)

console.log('global', ato1, ato2, ato3, ato4)

const dayInWeek = 7
let hoursOfStuding = 4
hoursOfStuding = 6

// Создайте функцию stringFrom(…), возвращающую
// строку, состоящую из значений всех переданных
// аргументов.Например, вызов stringFrom('I have', 5,
// 'apples') вернет строку «I have 5 apples»; 
// вызов stringFrom('Х value is', true) 
// вернет строку «Х value is true»

// const input1 = document.querySelectorAll('#task_1 input')
// const button1 = document.querySelector('#task_1 button')
// const output1 = document.querySelector('#task_1 p')

// function concatenate() {

//   let result = ''
//   for (let el of input1) {
//     result += el.value.toString()
//   }
//   output1?.innerText = result
// }

// button1?.addEventListener('click', concatenate)

// if (button1) {
//   button1.addEventListener('click', concatenate)
// }

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b){
    return a * b;
}
let res = rectangleArea(10,10);
console.log(res);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea (r){
    return Math.PI * r * r;
}
 res = circleArea(10);
console.log(res);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h, r){
    return 2 * Math.PI * r * h;
}
res = cylinderArea(10,10);
console.log(res);
// - створити функцію яка приймає масив та виводить кожен його елемент
const coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
function coursesArray(array){
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
coursesArray(coursesTitleArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function makeParagraph(p){
    document.write(`<p>${p}</p`);
}
makeParagraph("lorem ipsum");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listUl(text) {
    document.write(`<ul>
        <li> ${text} </li>
        <li> ${text} </li>
        <li> ${text} </li>
    </ul>`);
}

listUl("lorem ipsum");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulList(text, num){
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}
ulList("lorem ipsum", 6)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const mixArr = [11, true, "lorem ipsum"];
function arreyList(element){
    document.write(`<ul>`);
    for (const elementElement of element) {
        document.write(`<li>`+`${elementElement}`+`</li>`);
    }
    document.write(`</ul>`);
}
arreyList(mixArr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 22 },
    { id: 4, name: 'Alice Williams', age: 28 },
    { id: 5, name: 'Charlie Brown', age: 35 },
    { id: 6, name: 'Eva Davis', age: 29 },
    { id: 7, name: 'Frank White', age: 31 },
    { id: 8, name: 'Grace Lee', age: 26 },
    { id: 9, name: 'Henry Harris', age: 33 },
    { id: 10, name: 'Ivy Robinson', age: 27 }
];
function usersArray(array){
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<div>`+`ID: ${arrayElement.id}<br>`+`Name:  ${arrayElement.name} <br>`+`Age: ${arrayElement.age} <hr>`+`</div>`);
    }
}
usersArray(users)
// - створити функцію яка повертає найменьше число з масиву
let number = [1, 2, 3 , 4, 5, 6];
function minNum(num){
    let minNumber = num[0];
    for (const numElement of num) {
        if (numElement<minNumber){
            minNumber = numElement
        }
    }
    return minNumber;
}
let resultMinNumber = minNum(number);
console.log(resultMinNumber);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let plusArr = [1, 2, 10]
function plusElements (elements){
let sum = 0;
    for (const element of elements) {
        sum += element;
    }
    return sum;
}
console.log(plusElements(plusArr));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let numberSwap = [11,22,33,44];
function swap(arr, index1, index2){

}
console.log(swap(numberSwap, 0, 1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const curr of currencyValues) {
        if (curr.currency === exchangeCurrency){
            return sumUAH / curr.value
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR ', value: 42}], 'USD'));
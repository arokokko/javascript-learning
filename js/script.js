'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце:", ''),
//         b = prompt("Во сколько это обойдется?", '');
    
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
//     a != '' && b != '' ) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// }
let i = 0;

do {
    let a = prompt("Введите обязательную статью расходов в этом месяце:", ''),
        b = prompt("Во сколько это обойдется?", '');
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
    a != '' && b != '' ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
} while (i < 2);

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце:", ''),
//         b = prompt("Во сколько это обойдется?", '');
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
//     a != '' && b != '' ) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }

appData.moneyPerDay = appData.budget/30;

alert("Ваш бюджет на 1 день: " + appData.moneyPerDay + " рублей");

if (appData.moneyPerDay < 500) {
    console.log("Min level of income");
} else if (appData.moneyPerDay >= 500 && appData.moneyPerDay < 2000) {
    console.log("Middle level of income");
} else if (appData.moneyPerDay >= 2000) {
    console.log("High level of income");
} else {
    console.log("Uppss, something going wrong");
}

// let num = 50;

// if (num < 50) {
//     console.log("Wrong!");
// } else if (num > 50) {
//     console.log("Too much!");
// } else {
//     console.log("Right!!!");
// }

// (num == 50) ? console.log("Right!") : console.log("Wrong!");

// switch (true) {
//     case num < 50:
//         console.log("More!");
//         break;
//     case num > 50:
//         console.log("Too much!");
//         break;
//     case num == 50:
//         console.log("You are right!");
//         break;
//     default:
//         console.log("Something going wrong!");
//         break;
// }


// let num = 5;

// while (num < 10) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 15);

// for (let i = 1; i < 7; i++) {
//     console.log(i);
// }

// for (let i = 10; i < 17; i++) {
//     if (i == 13) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 20; i < 27; i++) {
//     if (i == 23) {
//         continue;
//     }
//     console.log(i);
// }

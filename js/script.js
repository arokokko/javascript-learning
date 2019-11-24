'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let consum = prompt("Введите обязательную статью расходов в этом месяце:");
let cash = +prompt("Во сколько это обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        consume: cash
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};

alert("Ваш бюджет на 1 день: " + (appData.budget - appData.expenses.consume)/30 + " рублей");



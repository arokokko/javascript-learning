'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while ( isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце:", ''),
                b = prompt("Во сколько это обойдется?", '');
            
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
            a != '' && b != '' ) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }        
    },
    detectDayBudget: function() {
        appData.moneyPerDay = parseInt(appData.budget/30);
        alert("Ваш бюджет на 1 день: " + appData.moneyPerDay + " рублей");        
    },
    detectedLevel: function() {
        if (appData.moneyPerDay < 500) {
            console.log("Min level of income");
        } else if (appData.moneyPerDay >= 500 && appData.moneyPerDay < 2000) {
            console.log("Middle level of income");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("High level of income");
        } else {
            console.log("Uppss, something going wrong");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма ваших накоплений?'),
                percent = +prompt('Какой процент годовых?');
            appData.incomeMonth = save / 100 / 12 * percent;
            alert('Доход с вашего депозита составляет ' + appData.incomeMonth + ' в месяц');
        }
    },
    chooseOptionalExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Введите необязательную статью расходов в этом месяце:", '');
            
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' ) {
                appData.optionalExpenses[i] = a;
            } else {
                i--;
            }
        }
    }, 
    chooseIncome: function() {
        for (let i = 1; i < 2; i++ ) {
            let items = prompt("Дополнительные источники дохода (перечислите через запятую)", "");
            if ( (typeof(items)) === 'string' && (typeof(items)) != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Что-нибудь еще?', ''));
                appData.income.sort();
            } else {
                i--;
            }
        }

        appData.income.forEach(function(item, i) {
            alert('Дополнительные способы заработка: ' + (i + 1) + (' - ') + item);
        });
    }
 
};

for (let key in appData) {
    console.log('Our app includes ' + key + ' - ' + appData[key]);
}



// let i = 0;

// do {
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
// } while (i < 2);

// let i = 0;

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








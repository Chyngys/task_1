'use strict';
let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let first = prompt("Введите обязательную статью расходов в этом месяце", "");
let second = prompt("Во сколько обойдется?", "");
appData.expenses.first = second;
alert(appData.budjet/30);
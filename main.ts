#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
  USD: 1,
  EUR: 0.93,
  GBP: 0.8,
  INR: 83.29,
  PKR: 278.72,
  AED: 3.67,
  SAR: 3.75,
  BHD: 0.38,
  QAR: 3.64,
  JOD: 0.71,
  KWD: 0.31,
  OMR: 0.38,
  BND: 1.36,
  SGD: 1.36,
  MYR: 4.76,
  NZD: 1.68,
  AUD: 1.53,
  CAD: 1.37,
  CHF: 0.91,
  CNY: 7.24,
  HKD: 7.83,
};

console.log(chalk.blue('Welcome to the Currency Converter!'));
let answer = await inquirer.prompt([
  {
    name: "amount",
    message: "Enter the amount to convert:",
    type: "number",
  },
  {
    name: "from",
    message: "Select the base currency:",
    type: "list",
    choices: [
      "USD",
      "EUR",
      "GBP",
      "INR",
      "PKR",
      "AED",
      "SAR",
      "BHD",
      "QAR",
      "JOD",
      "KWD",
      "OMR",
      "BND",
      "SGD",
      "MYR",
      "NZD",
      "AUD",
      "CAD",
      "CHF",
      "CNY",
      "HKD",
    ],
  },
  {
    name: "to",
    message: "Select the target currency:",
    type: "list",
    choices: [
      "USD",
      "EUR",
      "GBP",
      "INR",
      "PKR",
      "AED",
      "SAR",
      "BHD",
      "QAR",
      "JOD",
      "KWD",
      "OMR",
      "BND",
      "SGD",
      "MYR",
      "NZD",
      "AUD",
      "CAD",
      "CHF",
      "CNY",
      "HKD",
    ],
  },
]);

let fromCurrency = currency[answer.from];
let toCurrency = currency[answer.to];

console.log(
  chalk.blue(
    `${answer.amount} ${answer.from} is equal to ${
      (answer.amount * toCurrency) / fromCurrency
    } ${answer.to}.`
  )
);

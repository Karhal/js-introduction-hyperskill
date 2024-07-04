// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));

// Write your code here
const input = require('sync-input');
const currencies = 
[
  {
    'name': 'JPY',
    'value': '113.5'
  },
  {
    'name': 'EUR',
    'value': '0.89'
  },
  {
    'name': 'RUB',
    'value': '74.36'
  },
  {
    'name': 'GBP',
    'value': '0.75'
  },
  {
    'name': 'USD',
    'value': '1'
  },
];
console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");
let userIntent = null;

do {
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");
  userIntent = Number(input());

  if(userIntent !== 1 && userIntent !== 2) {
    console.log("Unknown input");
    continue;
  }
  if(userIntent === 2) {
    break;
  }
  console.log("What do you want to convert?");
  let currencyToConvert = input("From: ");
  if(!Object.values(currencies.map((element) => {
      return element.name;
  })).includes(currencyToConvert.toUpperCase())) {
    console.log("Unknown currency");
    continue;
  }
  
  let to = input("To: ");
  if(!Object.values(currencies.map((element) => {
      return element.name;
  })).includes(to.toUpperCase())) {
    console.log("Unknown currency");
    continue;
  }
  
  let amount = Number(input("Amount: "));
  
  if(amount < 1) {
    console.log("The amount cannot be less than 1");
    continue;
  }
  if(typeof amount !== "number" || Number.isNaN(amount)) {
    console.log("The amount has to be a number");
    continue;
  }
  
  function convert(currencyToConvert, to, amount) {
    
      let ratioToUSDTo = currencies.find((element) => element.name.toLowerCase() === to.toLowerCase());
      let ratioToUSDFrom = currencies.find((element) => element.name.toLowerCase() === currencyToConvert.toLowerCase());
    
      let result = (ratioToUSDTo.value*amount)/ratioToUSDFrom.value;
    
      return result.toFixed(4);
  };
  
  
  const result = convert(currencyToConvert, to, amount);
  console.log(`Result: ${amount} ${currencyToConvert.toUpperCase()} equals ${result} ${to.toUpperCase()}`)

}while(userIntent !== 2);

console.log("Have a nice day!");

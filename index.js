#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1248;
console.log("Welcome To Anis: \"Atm - Machine\"");
const pinAnswer = await inquirer.prompt([
    {
        message: "Enter your pin:",
        type: "number",
        name: "pin"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin");
    console.log(`Current Account Balance is ${myBalance}`);
    const operationAns = await inquirer.prompt([
        {
            message: "Please select option",
            type: "list",
            name: "operation",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        const amountInsert = await inquirer.prompt([
            {
                message: "Enter your amount",
                type: "number",
                name: "amount"
            }
        ]);
        if (amountInsert.amount > myBalance) {
            console.log(`You have insufficient balance`);
        }
        else {
            myBalance -= amountInsert.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        const quickCash = await inquirer.prompt([
            {
                message: "Enter your withdraw amount",
                type: "list",
                name: "fastcash",
                choices: ["20000", "10000", "5000", "2000", "1000",]
            }
        ]);
        if (quickCash.fastcash > myBalance) {
            console.log(`You have insufficient balance`);
        }
        else {
            myBalance -= quickCash.fastcash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin");
}

#! /usr/bin/env node
import chalk from "chalk"; // call chalk from chalk
import inquirer from "inquirer"; // call inquirer from inquirer
let myamount = 10000; // my total amount save in variable
let myPin = 4321; //  my pincode save in variable
console.log(chalk.red.bold.italic("well come")); // wellcome notice
console.log(chalk.blue.bold("please enter your ATM card")); // instruction to user
console.log(chalk.yellow.bold(`my current balnce is ${myamount}`)); // inform  user
console.log(chalk.yellow.italic(`my pin code is ${myPin}`)); // inform user
let answers = await inquirer.prompt([
    {
        name: "language",
        message: "please select a language", // in this object chose a language
        type: "list",
        choices: ["urdu", "english"],
    },
    {
        Type: "input",
        name: "userId",
        message: "kindly Enter your Id(your name)" // in this object enter your id
    },
    {
        type: "number",
        name: "userpin",
        message: "kindly Enter your pin:", // in this object enter your pin
    }
]);
if (answers.userpin === myPin) {
    console.log("your pin is correct");
} // in console agar pin barabr ha tu ok otherwise stop
let accountType = await inquirer.prompt([
    {
        name: "accountType",
        message: "select your account type:",
        type: "list", // in this object select account type
        choices: ["saving", "current"],
    }
]);
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "select your transaction", // in this object select transaction type
        type: "list",
        choices: ["withdraw", "checkbalance"],
    }
]);
if (operationAns.operation === "withdraw") // agar type = ha withdraw k you can go to next option
 {
    let withdraw = await inquirer.prompt([{
            name: "amount",
            message: "please select your amount",
            type: "list",
            choices: ["500", "1000", "50000",],
        }]);
    if (withdraw.amount > myamount) { // agar amount zayada ha mary amount sa
        console.log(chalk.red.bold.italic("insufficent amount"));
    }
    ; // ask no balance
    console.log(chalk.green.bold("please wait... your transiction is in process")); // stop process start ho raha ha 
    myamount -= withdraw.amount; // maray amount sa - kr do nikala howa amount
    console.log(chalk.green.bold(`your remaining balance is ${myamount}`)); // bta do bacha howa amount
}
else if (operationAns.operation === "checkbalance") { // agar bolan check balance bta dn
    console.log(chalk.green.italic(`your current balance is ${myamount}`)); // ap ka current balance
}
else {
    console.log(chalk.red.bold.italic("your pin is incorrecet/nplease enter a correcet pincode!")); // agar galt pin ho tu invalid da do
}
;
console.log(chalk.red.bold("Thank you!"));

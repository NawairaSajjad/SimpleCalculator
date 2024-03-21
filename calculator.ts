#! /usr/bin/env node



import inquirer from "inquirer";

const answer = await inquirer.prompt
 ([{
    message: "input the first value:" , type: "number", name: "num1"
},
{message: "enter the second number: " , type: "number", name : "num2"},
{
message: "which operation you want to perform :" , type: "list" ,name : "operator" ,
choices: ["Addition","Subtraction","Multiplication","Division"],
}]);
 if(answer.operator === "Addition"){
    console.log("the addiion of numbers: "+ (answer.num1+answer.num2))
 }
 else if(answer.operator === "Subtraction"){
    console.log("the sub of numbers is: "+(answer.num1-answer.num2 ))
 }
 else if(answer.operator === "Division"){
    console.log("the division of numbers is: "+(answer.num1/answer.num2 ))
 }
 else if(answer.operator === "Multiplication"){
    console.log("the multiplication of numbers is: "+(answer.num1*answer.num2 ))
 }else{
    console.log("please choose correct operator!!..Thank you")
 }
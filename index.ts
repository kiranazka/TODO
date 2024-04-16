#!/usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
console.log("\n Welcome to Todo List App code with Azka\n");
while(conditions){
    let addTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your new task:",
        }
    ]);

todoList.push(addTask.task);
console.log (`\n${addTask.task} Task added in Todo-List successfuly\n`);
 
let addMoreTask = await inquirer.prompt([
    {
        name:"addMore",
        type:"confirm",
        message:"Do you want to add more task ?",
        default:"fasle",

    }
    
]);
conditions = addMoreTask.addmore
 }

console.log(`Your update Todo-List ${todoList} `);
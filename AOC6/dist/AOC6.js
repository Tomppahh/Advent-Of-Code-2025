"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const dataStream = fs.readFileSync("data/datafile.txt", "utf-8");
const grid = dataStream
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "")
    .map((line) => line
    .split(/[\s,]+/)
    .map((item) => item.trim())
    .filter((item) => item !== ""));
const operatorArray = grid.splice(-1, 1)[0];
// Remove separator columns in-place (columns that are empty in all rows)
for (let col = operatorArray.length - 1; col >= 0; col--) {
    let isSeparator = true;
    for (let row = 0; row < grid.length; row++) {
        if (grid[row][col] && grid[row][col].trim() !== "") {
            isSeparator = false;
            break;
        }
    }
    if (isSeparator) {
        for (let row = 0; row < grid.length; row++) {
            grid[row].splice(col, 1);
        }
        operatorArray.splice(col, 1);
    }
}
let sumArray = [];
let multiplyArray = [];
const gridWith = grid.length > 0 ? grid[0].length : 0;
let totalSum = 0;
for (let column = 0; column < gridWith; column++) {
    let sum = 0;
    if (operatorArray[column] === "+") {
        for (let row = 0; row < grid.length; row++) {
            sum += Number(grid[row][column]);
        }
        sumArray.push(sum);
        // console.log(`column index: ${column}`)
    }
    else if (operatorArray[column] === "*") {
        let multiply = 1;
        for (let row = 0; row < grid.length; row++) {
            multiply *= Number(grid[row][column]);
        }
        multiplyArray.push(multiply);
        // console.log(`column index: ${column}`)
    }
}
totalSum = sumArray.reduce((a, b) => a + b, 0);
let totalMultiply = multiplyArray.reduce((a, b) => a + b, 0);
const finalAnswer = totalSum + totalMultiply;
console.log(`finalAnswer: ${finalAnswer}`);

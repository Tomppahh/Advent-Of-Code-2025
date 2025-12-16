"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const readFiletoArray = (filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    const dataArray = data.split("\r\n");
    return dataArray.map((s) => s.trim()).filter((s) => s !== "");
    // remove whitespaces and empty rows
};
const filePath = "./data/datafile.txt";
const fileDataArray = readFiletoArray(filePath);
const findLargestNumbersfromRow = (arr) => {
    let sumOfGlueNumbers = 0;
    for (let index = 0; index < arr.length; index++) {
        let value = arr[index];
        const digits = value.split("").map(Number);
        let currentMax = 0;
        // Check all pairs (i, j) where i < j
        for (let i = 0; i < digits.length; i++) {
            for (let j = i + 1; j < digits.length; j++) {
                let gluenumber = Number(String(digits[i]) + String(digits[j]));
                if (gluenumber > currentMax) {
                    currentMax = gluenumber;
                }
            }
        }
        sumOfGlueNumbers += currentMax;
    }
    console.log(`Sum of joltages is: ${sumOfGlueNumbers}`);
};
findLargestNumbersfromRow(fileDataArray);

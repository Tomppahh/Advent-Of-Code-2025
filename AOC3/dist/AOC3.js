"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const readFiletoArray = (filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    const dataArray = data.split("\r\n");
    return dataArray.map((s) => s.trim());
};
const filePath = "./data/datafile.txt";
const fileDataArray = readFiletoArray(filePath);
console.log(fileDataArray);
// apufunktio harjotuksen vuoksi
const convertStringToNumber = (arr) => {
    let numberArray = arr.map(Number);
    console.log(numberArray);
    return numberArray;
};
const findLargestNumberfromRow = (arr) => { };
const NumberDataArray = convertStringToNumber(fileDataArray);

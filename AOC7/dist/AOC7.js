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
console.log(grid);

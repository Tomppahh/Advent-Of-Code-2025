"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const dataStream = fs.readFileSync("./data/datafile.txt", "utf-8");
const dataGrid = dataStream
    .split("\r\n")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map((line) => line.split(""));
const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
];
let totalRemoved = 0;
while (true) {
    const toRemove = [];
    for (let row = 0; row < dataGrid.length; row++) {
        for (let col = 0; col < dataGrid[row].length; col++) {
            if (dataGrid[row][col] === "@") {
                let neighborCount = 0;
                for (const [dRow, dCol] of directions) {
                    const newRow = row + dRow;
                    const newCol = col + dCol;
                    if (newRow >= 0 &&
                        newRow < dataGrid.length &&
                        newCol >= 0 &&
                        newCol < dataGrid[newRow].length &&
                        dataGrid[newRow][newCol] === "@") {
                        neighborCount++;
                    }
                }
                if (neighborCount < 4) {
                    toRemove.push([row, col]);
                }
            }
        }
    }
    if (toRemove.length === 0)
        break;
    for (const [row, col] of toRemove) {
        dataGrid[row][col] = ".";
    }
    totalRemoved += toRemove.length;
}
console.log("Total rolls removed:", totalRemoved);

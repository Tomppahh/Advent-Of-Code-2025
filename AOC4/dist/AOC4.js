"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const dataStream = fs.readFileSync("./data/datafile.txt", "utf-8");
const dataGrid = dataStream
    .split("\r\n")
    .map((s) => s.trim())
    .filter((s) => s !== "");
const directions = [
    [-1, -1], // NW
    [-1, 0], // N
    [-1, 1], // NE
    [0, -1], // W
    [0, 1], // E
    [1, -1], // SW
    [1, 0], // S
    [1, 1], // SE
];
let accessibleRolls = 0;
for (let row = 0; row < dataGrid.length; row++) {
    for (let col = 0; col < dataGrid[row].length; col++) {
        // Only check if current position is @
        if (dataGrid[row][col] === "@") {
            let neighborCount = 0;
            // Count @ neighbors for THIS position
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
                accessibleRolls++;
            }
        }
    }
}
console.log(accessibleRolls);

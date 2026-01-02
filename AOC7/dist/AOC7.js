"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function readDatatoGrid() {
    const dataStream = fs.readFileSync("data/datafile.txt", "utf-8");
    return dataStream
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
}
// eli tämän hetkinen viiva tilanne olkoon aV
// hattujen määrä per rivi olkoon HperR
// peruskaava on sillon aV ^(HperR)
// jos useampi viiva osuu hattuun silloin kaava on
// aV(aV^HperR)
// tähän voi käyttää hyödyks sitä aiempaa gridi tarkistus algoritmiä!
function main() {
    const startLineAmount = 1;
    let grid = readDatatoGrid();
    const startingPosition = grid[0].indexOf("S");
    console.log(grid, startingPosition);
}
main();
// if line index = ., line index = viiva.
// if line index = ^, line index + 1 and line index -1 = viiva

import * as fs from "fs";

const dataStream = fs.readFileSync("./data/datafile.txt", "utf-8");
let dataGrid = dataStream
	.split("\n")
	.map((s) => s.trim())
	.filter((s) => s !== "");
// .map((line) => line.split(""));

function stringToNum(str: string[]): number[] {
	let NumArray = str.map(Number);
	return NumArray;
}

let rangeArray: string[] = [];
let IDArray: number[] = [];

for (let i = dataGrid.length - 1; i >= 0; i--) {
	if (dataGrid[i].includes("-") === true) {
		rangeArray.push(dataGrid[i]);
		dataGrid.splice(i, 1);
	} else {
		let dataGridonlyIDS = stringToNum(dataGrid);
		IDArray.push(dataGridonlyIDS[i]);
	}
}

console.log(`rangeArray content: ${rangeArray} | ID Arraycontent ${IDArray}`);

const splitRanges = rangeArray.map((r) => r.split("-"));
console.log(`splitRanges content: ${splitRanges}`);

let A: number = 0;
let B: number = A + 1;

const range = { A, B };

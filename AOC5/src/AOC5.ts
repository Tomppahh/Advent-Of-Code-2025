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

// console.log(`rangeArray content: ${rangeArray} | ID Arraycontent ${IDArray}`);
const splitRanges = rangeArray.map((r) => r.split("-").map(Number));

function isItinRange(IDs: number[], rangeArray: number[][]): number {
	let freshCount = 0;
	for (const [A, B] of rangeArray) {
		for (let i = IDs.length - 1; i >= 0; i--) {
			if (IDs[i] >= A && IDs[i] <= B) {
				IDs.splice(i, 1);
				freshCount++;
			}
		}
	}
	return freshCount;
}

console.log(`Part one: ${isItinRange(IDArray, splitRanges)}`);
// merge intervals problem
function partTwo(ranges: number[][]): number {
	// Sort ranges by start number
	ranges.sort((a, b) => a[0] - b[0]);

	let count = 0;
	let [A, B] = ranges[0]; // Start with first range

	for (let i = 1; i < ranges.length; i++) {
		const [newA, newB] = ranges[i];
		if (newA > B + 1) {
			// add the previous range to count, start new one
			count += B - A + 1;
			[A, B] = [newA, newB];
		} else {
			// check if newB range is > B, if yes update B
			B = Math.max(B, newB);
		}
	}
	// Add the last range
	count += B - A + 1;
	return count;
}

try {
	console.log(`Part two: ${partTwo(splitRanges)}`);
} catch (e) {
	console.error("Error:", e);
}

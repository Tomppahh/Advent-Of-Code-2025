import * as fs from "fs";

const readFiletoArray = (filePath: string): string[] => {
	const data = fs.readFileSync(filePath, "utf8");
	const dataArray = data.split("\r\n");
	return dataArray.map((s) => s.trim());
};

const filePath = "./data/datafile.txt";
const fileDataArray = readFiletoArray(filePath);

console.log(fileDataArray);

// helper function to convert string array into a number array
const convertStringToNumber = (arr: string[]): number[] => {
	let numberArray: number[] = arr.map(Number);
	console.log(numberArray);
	return numberArray;
};
// converted data ready to be given to next function
const NumberDataArray = convertStringToNumber(fileDataArray);

const findLargestNumbersfromRow = (arr: number[]) => {
	let largest = 0;
	let secondlargest = 9;
};

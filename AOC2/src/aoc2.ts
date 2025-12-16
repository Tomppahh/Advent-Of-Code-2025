import * as fs from "fs";

// // 11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
// 1698522-1698528,446443-446449,38593856-38593862,565653-565659,
// 824824821-824824827,2121212118-2121212124

// Since the young Elf was just doing silly patterns,
// you can find the invalid IDs by looking for any ID which is made only of some sequence of digits repeated twice.
// So, 55 (5 twice), 6464 (64 twice), and 123123 (123 twice) would all be invalid IDs.

// None of the numbers have leading zeroes; 0101 isn't an ID at all. (101 is a valid ID that you would ignore.)

// 11-22 has two invalid IDs, 11 and 22.
// 95-115 has one invalid ID, 99.
// 998-1012 has one invalid ID, 1010.
// 1188511880-1188511890 has one invalid ID, 1188511885.
// 222220-222224 has one invalid ID, 222222.
// 1698522-1698528 contains no invalid IDs.
// 446443-446449 has one invalid ID, 446446.
// 38593856-38593862 has one invalid ID, 38593859.
// The rest of the ranges contain no invalid IDs.

// jaa indexit pilkulla arrayhyn ensin. tee toinen array missä kielletyt asiat on: sama numero peräkkäin.
// arrayn indexit on numerovälejä.
// esim 11-22, const a voisi olla 11, const b voisi olla 22. jaa luku kahtia keskeltä, tallenna etu puoli numerosta muuttujaan.
// vertaa tätä etupuolta for a->b, jos löytyy luku, se on virheellinen id

const readFiletoArray = (filePath: string): string[] => {
	const data = fs.readFileSync(filePath, "utf8");
	const dataArray = data.split(",");
	return dataArray.map((s) => s.trim());
};

const filePath = "./data/datafile.txt";
const fileDataArray = readFiletoArray(filePath);
let sumOfInvalids: number = 0;

const partTwoChecker = (s: string): boolean => {
	if (!s) return false;
	return (s + s).slice(1, -1).includes(s);
	// note, i googled how to check for repeated substrings in a string
	// found this page and referenced it in this function!:
	// https://www.techiedelight.com/check-string-for-repeated-substrings/
};
console.log(`Final  total: ${sumOfInvalids}`);

fileDataArray.forEach((element) => {
	const [start, end] = element.split("-");
	const firstNum = parseInt(start);
	const secondNum = parseInt(end);

	for (let num = firstNum; num <= secondNum; num++) {
		const numStr = num.toString();
		if (partTwoChecker(numStr)) {
			sumOfInvalids += num;
			console.log(
				`PARTTWOCHECKER Invalid ID found: ${num} | Total sum now: ${sumOfInvalids}`
			);
			continue;
		}

		// this is part 1 underneath this comment and we dont reach it after partTwo code.
		if (numStr.length % 2 !== 0) continue;
		const half: number = Math.floor(numStr.length / 2);
		const first: string = numStr.slice(0, half);
		const second: string = numStr.slice(half);
		if (first === second) {
			sumOfInvalids += num;
			console.log(`Invalid ID found: ${num} | Total sum now: ${sumOfInvalids}`);
		}
	}
});

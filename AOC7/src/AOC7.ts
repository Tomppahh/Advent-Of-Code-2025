import * as fs from "fs";

const dataStream = fs.readFileSync("data/datafile.txt", "utf-8");
const grid: string[][] = dataStream
	.split("\n")
	.map((line) => line.trim())
	.filter((line) => line !== "")
	.map((line) =>
		line
			.split(/[\s,]+/)
			.map((item) => item.trim())
			.filter((item) => item !== "")
	);

console.log(grid);

// eli tämän hetkinen viiva tilanne olkoon aV
// hattujen määrä per rivi olkoon HperR
// peruskaava on sillon aV ^(HperR)
// jos useampi viiva osuu hattuun silloin kaava on
// aV(aV^HperR)
// tähän voi käyttää hyödyks sitä aiempaa gridi tarkistus algoritmiä!

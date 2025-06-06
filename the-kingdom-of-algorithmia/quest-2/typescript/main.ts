import * as path from "path";
import * as fs from "fs";

// Path Resolution
const inputFileOne = path.resolve(__dirname, "..", "input_part1.txt");
const inputFileTwo = path.resolve(__dirname, "..", "input_part2.txt");
const inputFileThree = path.resolve(__dirname, "..", "input_part3.txt");

// Read and Transform Input
// Part One
const contentOne = fs.readFileSync(inputFileOne, "utf-8").split("\n");
const wordsOne = contentOne[0].trim();
const partOne = contentOne.splice(1).join("\n").trim();

const powerWords: string[] = [];

wordsOne
  .split(":")[1]
  .split(",")
  .forEach((powerWord) => {
    const cleanedWord = powerWord.trim();
    powerWords.push(cleanedWord);
  });

// Part Two
const contentTwo = fs.readFileSync(inputFileTwo, "utf-8").split("\n");
const wordsTwo = contentTwo[0].trim();
const partTwo: string[] = contentTwo.splice(1);

const runicWordsTwo: string[] = [];

wordsTwo
  .split(":")[1]
  .split(",")
  .forEach((runicWord) => {
    const cleanedWord = runicWord.trim();
    runicWordsTwo.push(cleanedWord);
  });

console.log(runicWordsTwo);
console.log(partTwo.length);
// const partTwo = fs.readFileSync(inputFileTwo, "utf-8");
// const partThree = fs.readFileSync(inputFileThree, "utf-8");

// Puzzle Logic
// Part One
function powerWordsInSpell(spell: string, runicWords: string[]): number {
  let totalCount = 0;

  runicWords.forEach((runicWord) => {
    const regex = new RegExp(runicWord, "g");

    const matches = spell.match(regex);

    totalCount += matches ? matches.length : 0;
  });

  return totalCount;
}

// Part Two
export function runicWordsInSpell(
  inscriptions: string[],
  runicWords: string[],
): number {
  let totalCount = 0;

  const runicWordsInLine = (inscriptionLine: string): number => {
    let count = 0;

    runicWords.forEach((runicWord) => {
      const regex = new RegExp(`(?=${runicWord})`, "g");
      const matches = inscriptionLine.match(regex);

      count += matches ? matches.length * runicWord.length : 0;
    });

    return count;
  };
  let lines = 0;
  for (const inscription of inscriptions) {
    lines++;
    totalCount += runicWordsInLine(inscription);
    totalCount += runicWordsInLine(inscription.split("").reverse().join(""));
  }
  console.log(lines);
  return totalCount;
}

// Part One
console.log("Part One");
console.log(`Total Count ${powerWordsInSpell(partOne, powerWords)}`);

// Part Two
console.log("Part Two");
console.log(`Total Count ${runicWordsInSpell(partTwo, runicWordsTwo)}`);

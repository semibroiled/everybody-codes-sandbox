import * as path from "path";
import * as fs from "fs";

// Path Resolution
const inputFileOne = path.resolve(__dirname, "..", "input_part1.txt");
const inputFileTwo = path.resolve(__dirname, "..", "input_part2.txt");
const inputFileThree = path.resolve(__dirname, "..", "input_part3.txt");

// Read Input
const partOne = fs.readFileSync(inputFileOne, "utf-8");
const partTwo = fs.readFileSync(inputFileTwo, "utf-8");
const partThree = fs.readFileSync(inputFileThree, "utf-8").trim();
// console.log("PartThree", partThree.trim().length % 3);
// console.log("Puzzle input: ", partOne);

// Puzzle logic
const potionMap: Record<string, number> = {
  A: 0,
  B: 1,
  C: 3,
  D: 5,
  x: 0,
};

// Part One
const calculatePotions = (input: string): number => {
  let totalPotions = 0;

  // Iterate over each letter
  Array.from(input).forEach((letter) => {
    // console.log("The current letter is ", letter);
    // console.log("this corresponds to ", potionMap[letter]);
    totalPotions += potionMap[letter] || 0;
    // console.log("Running total is", totalPotions);
  });

  //return total
  return totalPotions;
};

// Part Two
function calculatePotionsInPairs(input: string): number {
  let totalPotions = 0;

  for (let i = 0; i < input.length; i += 2) {
    const firstItem = input[i];
    const secondItem = input[i + 1];

    // console.log("Pairs", firstItem, secondItem);

    if (firstItem === "x") {
      totalPotions += potionMap[secondItem] || 0;
    } else if (secondItem === "x") {
      totalPotions += potionMap[firstItem] || 0;
    } else {
      totalPotions += potionMap[firstItem] + 1 + potionMap[secondItem] + 1 || 0;
    }
  }
  return totalPotions;
}

// Part Three
function calculatePotionsInTriples(input: string): number {
  let totalPotions = 0;

  for (let i = 0; i < input.length; i += 3) {
    const firstItem = input[i];
    const secondItem = input[i + 1];
    const thirdItem = input[i + 2];

    const horde: [string, string, string] = [firstItem, secondItem, thirdItem];

    console.log("Triples", horde);

    let monsterCount = 0;

    for (const monster of horde) {
      if (monster === "x" || monster === "\n") {
        continue;
      }
      totalPotions += potionMap[monster] || 0;
      monsterCount++;
    }

    totalPotions += monsterCount === 3 ? monsterCount * 2 : 0;
    totalPotions += monsterCount === 2 ? monsterCount * 1 : 0;
  }
  return totalPotions;
}

// Part One
console.log("Part One");
console.log(`Total Potions: ${calculatePotions(partOne)}`);

// Part Two
console.log("Part Two");
console.log(`Total Potions: ${calculatePotionsInPairs(partTwo)}`);

//Part Three
console.log("Part Three");
console.log(`Total Potions: ${calculatePotionsInTriples(partThree)}`);

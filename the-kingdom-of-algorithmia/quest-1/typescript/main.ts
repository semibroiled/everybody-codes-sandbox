import * as path from "path";
import * as fs from "fs";

console.log("test");
// Path Resolution
const inputFile = path.resolve(__dirname,"..","input.txt");

// Read Input
const content = fs.readFileSync(inputFile, "utf-8");
console.log("Puzzle input: ", content);

// Puzzle logic 
const potionMap:Record<string, number> ={
    "A":0,
    "B":1,
    "C":3
}
const calculatePotions = (input: string):number => {
    let totalPotions = 0;

    // Iterate over each letter
    Array.from(input).forEach(letter => {
        console.log("The current letter is ", letter);
        console.log("this corresponds to ", potionMap[letter]);
        totalPotions += potionMap[letter] || 0;
        console.log("Running total is", totalPotions);
    });

    //return total
    return totalPotions;
}

console.log(`Total Potions: ${calculatePotions(content)}`)
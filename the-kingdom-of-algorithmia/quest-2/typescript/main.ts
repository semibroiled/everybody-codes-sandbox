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

//

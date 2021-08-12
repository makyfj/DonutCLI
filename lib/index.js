#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var commander_1 = require("commander");
var program = new commander_1.Command();
// clears terminal
clear_1.default();
console.log(chalk_1.default.red(figlet_1.default.textSync("donut-cli", { horizontalLayout: "full" })));
program
    .version("0.0.1")
    .description("An donut CLI for ordering a donut")
    .option("-c, --chocolate-frosting", "Add chocolate frosting ")
    .option("-j, --jelly-fill", "Add jelly fill")
    .option("-cs, --cinnamon-sugar", "Add cinnamon sugar")
    .option("-m, --m&ms", "Add m&ms")
    .option("-pb, --peanut-butter", "Add peanut butter")
    .parse(process.argv);
var options = program.opts();
console.log("You ordered a donut with:");
if (options.chocolate)
    console.log(" - chocolate frosting");
if (options.jelly)
    console.log(" - jelly fill");
if (options.cinnamon)
    console.log(" - cinnamon sugar");
if (options.peanutButter)
    console.log(" - peanut butter");
var mms = undefined === options.mms ? "peanut butter" : options.mms || "no";
console.log(" - " + mms + " m&ms");
if (!process.argv.slice(2).length) {
    program.outputHelp();
}

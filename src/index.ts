#!/usr/bin/env node

import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { Command } from "commander";

const program = new Command();

// clears terminal
clear();

console.log(
  chalk.red(figlet.textSync("donut-cli", { horizontalLayout: "full" }))
);

program
  .version("0.0.1")
  .description("An donut CLI for ordering a donut")
  .option("-c, --chocolate-frosting", "Add chocolate frosting ")
  .option("-j, --jelly-fill", "Add jelly fill")
  .option("-cs, --cinnamon-sugar", "Add cinnamon sugar")
  .option("-m, --m&ms", "Add m&ms")
  .option("-pb, --peanut-butter", "Add peanut butter")
  .parse(process.argv);

const options = program.opts();

console.log("You ordered a donut with:");
if (options.chocolate) console.log(" - chocolate frosting");
if (options.jelly) console.log(" - jelly fill");
if (options.cinnamon) console.log(" - cinnamon sugar");
if (options.peanutButter) console.log(" - peanut butter");

const mms: string =
  undefined === options.mms ? "peanut butter" : options.mms || "no";

console.log(` - ${mms} m&ms`);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

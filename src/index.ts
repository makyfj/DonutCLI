#!/usr/bin/env node

import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import path from "path";
import program from "commander";

// clears terminal
clear();

console.log(
  chalk.red(figlet.textSync("donut-cli", { horizontalLayout: "full" }))
);

program.version("0.0.3").description("An donut CLI for ordering a donut");

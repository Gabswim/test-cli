#!/usr/bin/env npx ts-node --esm
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { faker } from "@faker-js/faker";

yargs(hideBin(process.argv))
  .command(
    "add <num1> <num2>",
    "add two numbers",
    (yargs) =>
      yargs
        .positional("num1", {
          type: "number",
          describe: "the first number",
        })
        .positional("num2", {
          type: "number",
          describe: "the second number",
        }),
    (argv) => console.log(argv.num1 + argv.num2)
  )
  .demandCommand()
  .help()
  .parse();



#!/usr/bin/env tsx
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { AddCommand } from "./AddCommand";

yargs(hideBin(process.argv))
  .command(AddCommand)
  .demandCommand()
  .strict()
  .help()
  .parse();



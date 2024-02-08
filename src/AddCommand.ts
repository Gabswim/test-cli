import { CommandModule } from "yargs";

export const AddCommand = {
  command: "add <num1> <num2>",
  describe: "add two numbers",
  builder: (yargs) =>
    yargs
      .positional("num1", {
        type: "number",
        describe: "the first number",
      })
      .positional("num2", {
        type: "number",
        describe: "the second number",
      }),
  handler: ({num1, num2}) => {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  },
} satisfies CommandModule<{}, { num1: number; num2: number }>;

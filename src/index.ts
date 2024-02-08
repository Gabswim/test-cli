#!/usr/bin/env npx ts-node --esm

import { faker } from "@faker-js/faker"

console.log('Hello, world!1')
console.log(`fake user: ${faker.person.firstName()} ${faker.person.lastName()}`)
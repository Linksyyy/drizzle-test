import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./db/schema.ts";
import { eq } from "drizzle-orm";
import { faker } from "@faker-js/faker";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const randomNumber = () => Math.round(Math.random() * 100);
  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();

  const user = {
    name: randomName,
    age: randomNumber(),
    email: randomEmail,
  };

  await db.insert(usersTable).values(user);
}

for (let i = 0; i < 100; i++) {
  await main();
}

const allUsers = await db
  .select({ id: usersTable.id, name: usersTable.name })
  .from(usersTable);

console.log(allUsers)

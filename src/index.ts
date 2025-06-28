import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from './db/schema.ts'
import {eq } from 'drizzle-orm';
import { faker } from '@faker-js/faker'

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const randomNumber = () => Math.round(Math.random()*30);
  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();

    const user = usersTable.bu$inferInsert = {
    name: randomName,
    age: randomNumber(),
    email: randomEmail
  };

  await db.insert(usersTable).values(user);
  console.log('user inserido')
}
for (let i = 0; i < 100; i++) {
  await main()
}

console.log(await db.select().from(usersTable)
)
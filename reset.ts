import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./src/db/schema";

const db = drizzle(process.env.DATABASE_URL!);

await db.delete(usersTable)
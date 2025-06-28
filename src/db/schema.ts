import {uuid, pgTable, varchar, integer } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
       id: uuid().primaryKey().defaultRandom(),
       name: varchar({ length: 255 }).notNull(),
       age: integer().notNull(),
       email: varchar({ length: 255 }).notNull().unique(),
});
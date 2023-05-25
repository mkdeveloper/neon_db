import { pgTable, serial, boolean, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { InferModel } from "drizzle-orm";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const todoTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  is_done: boolean("is_done").default(false).notNull(),
});

export type Todo = InferModel<typeof todoTable>;
export type NewTodo = InferModel<typeof todoTable, "insert">; // insert type

export const db = drizzle(pool);

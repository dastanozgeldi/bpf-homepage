import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const resourcesTable = pgTable("resources_table", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  // TODO: implement slug
  link: text("link").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});

export type InsertResource = typeof resourcesTable.$inferInsert;
export type SelectResource = typeof resourcesTable.$inferSelect;

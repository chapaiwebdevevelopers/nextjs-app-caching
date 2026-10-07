import { doublePrecision, integer, pgTable, text } from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  category: text("category").notNull(),
  price: doublePrecision("price").notNull(),
  rating: doublePrecision("rating").notNull(),
  shortdescription: text("short_description").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
});

export const products = pgTable("products", {
  id: text("id").primaryKey(),
  productName: text("product_name").notNull(),
  category: text("category").notNull(),
  shortDescription: text("short_description").notNull(),
  description: text("description").notNull(),
  price: doublePrecision("price").notNull(),
  image: text("image").notNull(),
  rating: doublePrecision("rating").notNull(),
  stock: integer("stock").notNull(),
});

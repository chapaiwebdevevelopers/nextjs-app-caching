import "server-only";
import { eq, sql } from "drizzle-orm";
import { unstable_cache } from "next/cache";
import { getDatabase } from "../../db";
import { books, products } from "../../db/schema";

export const getBooks = unstable_cache(
  async () => getDatabase().select().from(books).orderBy(sql`length(${books.id})`, books.id),
  ["database-books"],
  { tags: ["books"], revalidate: false },
);

export async function getBook(bookId) {
  const [book] = await getDatabase()
    .select()
    .from(books)
    .where(eq(books.id, bookId))
    .limit(1);
  return book;
}

export const getProducts = unstable_cache(
  async () => getDatabase().select().from(products).orderBy(sql`length(${products.id})`, products.id),
  ["database-products"],
  { tags: ["products"], revalidate: 20 },
);

import "server-only";
import { getDatabase as connect } from "@netlify/database";
import { drizzle } from "drizzle-orm/netlify-db";
import * as schema from "./schema";

let database;

export function getDatabase() {
  database ??= drizzle({ client: connect(), schema });
  return database;
}

import { pgTable, varchar, date, numeric, primaryKey, uuid } from "drizzle-orm/pg-core";


export const stockTable = pgTable("stocks", {
    id: uuid().primaryKey(),
    stockTicker: varchar({length: 5}).notNull(),
    time: date().notNull(),
    price: numeric().notNull(),
});
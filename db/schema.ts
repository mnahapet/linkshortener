import {
  pgTable,
  integer,
  text,
  varchar,
  timestamp,
  index,
  uniqueIndex
} from 'drizzle-orm/pg-core';

export const links = pgTable(
  'links',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    userId: text('user_id').notNull(),
    originalUrl: text('original_url').notNull(),
    shortCode: varchar('short_code', { length: 8 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'date', withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date', withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date())
  },
  table => ({
    shortCodeIdx: uniqueIndex('short_code_idx').on(table.shortCode),
    userIdIdx: index('user_id_idx').on(table.userId)
  })
);

export type Link = typeof links.$inferSelect;
export type NewLink = typeof links.$inferInsert;

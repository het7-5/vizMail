import { int, mysqlTable, serial, varchar,text,timestamp } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users_table', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const emailTable = mysqlTable('emails', {
  id: varchar('id', { length: 50 }).primaryKey(),
  sender: text('sender'),
  receiver: text('receiver'),
  senderName: text('sender_name'),
  body: text('body'),
  tag: text('tag'),
  subject: text('subject'),
  time: text('time')
});
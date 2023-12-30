import {
  boolean,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const severityEnum = pgEnum("severity", [
  "low",
  "medium",
  "high",
  "critical",
])

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: varchar("clerk_id", { length: 256 }),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
})

export const websites = pgTable("websites", {
  id: serial("id").primaryKey(),
  url: text("url"),
  userId: serial("user_id").references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
})

export const marketingReports = pgTable("marketing_reports", {
  id: serial("id").primaryKey(),
  websiteId: serial("website_id").references(() => websites.id, {
    onDelete: "cascade",
  }),
  name: text("name"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
})

export const issues = pgTable("issues", {
  id: serial("id").primaryKey(),
  marketingReportId: serial("marketing_report_id").references(
    () => marketingReports.id,
    { onDelete: "cascade" }
  ),
  description: text("description"),
  severity: severityEnum("severity"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
})

export const actionableItems = pgTable("actionable_items", {
  id: serial("id").primaryKey(),
  issueId: serial("issue_id").references(() => issues.id, {
    onDelete: "cascade",
  }),
  description: text("description"),
  steps: text("steps"),
  completed: boolean("completed").default(false),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
})

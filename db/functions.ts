import { eq } from "drizzle-orm"

import { db } from "."
import {
  actionableItems,
  issues,
  marketingReports,
  users,
  websites,
} from "./schema"

class DBClient {
  // User functions
  async getUser(userId: string) {
    return await db.select().from(users).where(eq(users.clerkId, userId))
  }

  async addUser(userId: string) {
    return await db.insert(users).values({
      clerkId: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  // Website functions
  async getWebsitesData(userId: number) {
    return await db
      .select()
      .from(websites)
      .leftJoin(users, eq(users.id, userId))
      .leftJoin(marketingReports, eq(marketingReports.websiteId, websites.id))
      .leftJoin(issues, eq(issues.marketingReportId, marketingReports.id))
      .leftJoin(actionableItems, eq(actionableItems.issueId, issues.id))
  }
}

export const dbClient = new DBClient()

export type TWebsitesData = ReturnType<
  typeof dbClient.getWebsitesData
> extends Promise<infer U>
  ? U
  : never

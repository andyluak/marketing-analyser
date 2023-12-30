import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "@/db"
import { users } from "@/db/schema"
import { getAuth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req)

  if (!userId) {
    res.status(401).json({})
    return
  }

  const usersResponse = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, userId))

  if (usersResponse.length > 0) {
    res.status(200).json({})
    return
  }

  await db.insert(users).values({
    clerkId: userId,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  res.status(200).json({})
}

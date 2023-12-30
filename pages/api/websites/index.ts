import type { NextApiRequest, NextApiResponse } from "next"
import { dbClient } from "@/db/functions"
import { getAuth } from "@clerk/nextjs/server"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req)

  if (!userId) {
    res.status(401).json({})
    return
  }

  const userData = await dbClient.getUser(userId)

  if (req.method === "GET") {
    const usersResponse = await dbClient.getWebsitesData(userData[0].id)

    res.status(200).json(usersResponse)
  }

  res.status(200).json({})
}

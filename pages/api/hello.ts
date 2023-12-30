// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "@/db"
import { users } from "@/db/schema"

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const usersResponse = await db.select().from(users)
  res.status(200).json({ name: "John Doe" })
}

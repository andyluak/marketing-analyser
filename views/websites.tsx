import React from "react"
import { TWebsitesData } from "@/db/functions"
import { useQuery } from "@tanstack/react-query"

import NoData from "./no-data"

type Props = {
  userId: string
}
function Websites({ userId }: Props) {
  const {
    data: websitesData,
    error,
    isLoading,
  } = useQuery<TWebsitesData>({
    queryKey: ["websites", userId],
    queryFn: async () => {
      const res = await fetch("/api/websites")
      return res.json()
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (!websitesData?.length) {
    return <NoData />
  }

  if (websitesData?.length) return <div>Websites</div>
}

export default Websites

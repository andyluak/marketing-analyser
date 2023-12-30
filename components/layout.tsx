import React from "react"

import { cn } from "@/lib/utils"

type TLayout = {
  children: React.ReactNode
}

export default function Layout({ children }: TLayout) {
  return (
    <>
      <main
        className={cn(
          "min-h-screen bg-background font-sans antialiased grid grid-cols-12"
        )}
      >
        <aside className="col-span-2">Salut</aside>
        <div className="col-span-10">{children}</div>
      </main>
    </>
  )
}

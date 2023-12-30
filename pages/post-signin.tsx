import React from "react"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"

function PostSignIn({}) {
  const { user } = useUser()

  const userMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/post-signin", {
        method: "POST",
        body: JSON.stringify(user),
      })
    },
    onSuccess: () => {
      window.location.href = "/"
    },
  })

  React.useEffect(() => {
    if (user && userMutation.isIdle) {
      userMutation.mutate()
    }
  }, [user, userMutation])

  return <div>dasad</div>
}

export default PostSignIn

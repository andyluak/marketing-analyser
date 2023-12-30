import React from "react"
import { Frown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {}

function NoData({}: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
  }

  return (
    <div className="space-y-20">
      <p className="flex flex-row gap-3 text-lg items-center">
        <Frown className="size-8" />
        {
          "It seems you don't have any data yet. Let's change that. Below there is a form, all you need to do if fill out the required informations and submit it."
        }
      </p>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <Label
          htmlFor="website-name"
          className="flex items-start flex-col w-1/3 gap-2 text-xl"
        >
          Website name
          <Input
            id="website-name"
            name="website-name"
            type="text"
            className="text-xl"
          />
        </Label>
        <Label
          htmlFor="website-url"
          className="flex items-start flex-col w-1/3 gap-2 text-xl"
        >
          Website URL
          <Input
            id="website-url"
            name="website-url"
            placeholder="https://example.com"
            type="text"
            className="text-xl"
          />
          <span className="text-sm text-gray-500">
            Use the long url format (https://example.com)
          </span>
        </Label>
        <Label
          htmlFor="website-keywords"
          className="flex items-start flex-col w-1/3 gap-2 text-xl"
        >
          Website Additional Info
          <Input
            id="website-keywords"
            name="website-keywords"
            type="text"
            className="text-xl"
          />
          <span className="text-sm text-gray-500">
            For best results, use keywords and separate them by a comma
          </span>
        </Label>

        <Button type="submit" className="w-1/3 shadow-brutal" size="lg">
          Start Generating Your Report
        </Button>
      </form>
    </div>
  )
}

export default NoData

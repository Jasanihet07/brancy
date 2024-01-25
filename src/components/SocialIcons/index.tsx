import React from "react"
import Button from "../common/Button"
import { footerData } from "@/lib/constData"
type Props = {}

const SocialIcons = (props: Props) => {
  return (
    <div className="flex gap-2">
      {footerData.socialMedia.map((item) => {
        const Icon = item.icon
        return (
          <Button key={item.id} variant="round" color="green">
            <span className="sr-only">{item.name} account button</span>
            <Icon className="h-5" />
          </Button>
        )
      })}
    </div>
  )
}

export default SocialIcons

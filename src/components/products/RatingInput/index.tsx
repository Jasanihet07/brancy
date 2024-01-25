"use client"
import { useState } from "react"
import StarIcon from "@/public/icons/star.svg"
import clsx from "clsx"
import Button from "@/components/common/Button"

const Rating = () => {
  const [rating, setRating] = useState<number>(4)

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
    // if (onRatingChange) {
    //   onRatingChange(newRating);
    // }
  }

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((x) => (
        <Button variant="icon" key={x} onClick={() => handleRatingChange(x)}>
          <StarIcon
            key={x}
            className={clsx("h-5 w-5 flex-shrink-0", {
              ["text-yellow"]: x <= rating,
              ["text-gray/20"]: x > rating,
            })}
            aria-hidden="true"
          />
        </Button>
      ))}
    </div>
  )
}

export default Rating

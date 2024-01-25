"use client"
import { useState } from "react"
import { CiHeart } from "react-icons/ci"

const LikeButton = () => {
  const [liked, setLiked] = useState(false)

  const handleLikeClick = () => {
    setLiked(!liked)
  }

  return (
    <button
      className={`bg-transparent text-slate-700 px-2 py-2 rounded-full border-2 border-red-500 ${
        liked ? "" : ""
      }`}
      onClick={handleLikeClick}
    >
      <CiHeart />
    </button>
  )
}

export default LikeButton

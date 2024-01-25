// Rating component

import React from "react"

interface RatingProps {
  stars: number
  numReviews: number
}

// const Rating = ({ stars, numReviews }: RatingProps) => {
// const Ratingnew: React.FC<RatingProps> = ({ stars, numReviews }) =>{
const Ratingnew: React.FC<{ stars?: number; numReviews?: number }> = ({
  stars = 0,
  numReviews = 0,
}) => {
  const generateStars = (rating: number) => {
    const starIcons = []
    const fullStars = Math.floor(rating)

    for (let i = 0; i < fullStars; i++) {
      starIcons.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      )
    }

    return starIcons
  }

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center font-semibold text-xl">
          {generateStars(stars)}
        </div>
        <span className="text-gray-500">{numReviews} reviews</span>
      </div>
    </div>
  )
}

export default Ratingnew

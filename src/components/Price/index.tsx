"use client"
import { useProductActions } from "@/lib/context/product-context"
import useProductPrice from "@/lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { useMemo } from "react"

type Props = {
  id: string
}

const Price = ({ id }: Props) => {
  const { variant } = useProductActions()

  const price = useProductPrice({
    id: id,
    variantId: variant?.id,
  })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <h6 className="text-green-800">
      {selectedPrice?.calculated_price || "--"}
      {selectedPrice?.calculated_price !== selectedPrice?.original_price && (
        <p>{selectedPrice?.original_price || "--"}</p>
      )}
    </h6>
  )
}

export default Price

// <div className="flex gap-4 items-center">
//   <span className="font-bold text-body1">Price:</span>
//   <p className="font-semibold text-body1">
//     {currentPrice || originalPrice}/-
//   </p>
//   {currentPrice && originalPrice && (
//     <p className="line-through text-black text-opacity-70 text-body2">
//       {originalPrice}/-
//     </p>
//   )}
// </div>


// import React from "react"
// import Image from "next/image"
// import Link from "next/link"

// interface PriceProps {
//   disc: number
//   original: number
// }

// const Price = ({ disc, original }: PriceProps) => {
//   return (
//     <div>
//       <div className="flex justify-start  items-center gap-4 w-full">
//         <span className="text-xl font-semibold text-slate-700">${disc}</span>
//         <span className="text-gray-500 line-through text-sm">${original}</span>
//       </div>
//     </div>
//   )
// }

// export default Price

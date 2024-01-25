import React, { useState } from "react"

interface ProductCounterProps {
  onIncrement: () => void
  onDecrement: () => void
  count: number
}

const ProductCounter: React.FC<ProductCounterProps> = ({
  onIncrement,
  onDecrement,
  count,
}) => {
  return (
    <div className="border-2 border-red-600  rounded-md w-28">
      <div className="flex items-center">
        <button
          className="bg-white px-3 py-2 rounded-l-md w-10"
          onClick={onDecrement}
        >
          -
        </button>
        <span className="px-4 bg-white py-2">{count}</span>
        <button
          className="bg-white px-3 py-2 rounded-r-md w-10"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductCounter

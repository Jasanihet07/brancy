import clsx from "clsx"
import React from "react"

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <span
      className={clsx(
        "block w-5 aspect-square border-black border-2 border-t-transparent rounded-full animate-spin",
        {
          [className || ""]: !!className,
        }
      )}
    ></span>
  )
}

export default LoadingSpinner

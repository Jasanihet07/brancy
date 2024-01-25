"use client"
import React, { useState } from "react"
import Image from "next/image"
import product1 from "./1.jpeg"
import Addtocartbutton from "../Addtocartbutton"
import ProductCounter from "../Productcount"

interface Product {
  stars: number
  numReviews: number
}

interface Productcount {
  product: Product
}

const Productmodel: React.FC<Productcount> = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="flex justify-center   ">
      <div className="flex flex-col lg:flex-row justify-center gap-8 h-4/5 p-6 bg-slate-200">
        <div className="lg:w-1/2 h-full flex justify-center">
          <Image
            src={product1}
            alt="img"
            className="bg-violet-400 rounded-md bg-cover"
            width={400}
            height={500}
          />
        </div>

        <div className="lg:w-1/2">
          <p>Premium collection</p>
          <h3 className="text-3xl pt-4">
            Offline Instant Age Rewind <br />
            Eraser.
          </h3>

          {/* <Ratingnew stars={item.stars} numReviews={item.numReviews} /> */}
          {/* <Ratingnew stars={product.stars} numReviews={product.numReviews} /> */}

          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            <br /> repellendus. Nam voluptate illo ut quia non sapiente
            provident alias <br />
            quos laborum incidunt, earum accusamus, natus. Vero pariatur ut
            <br />
            veniam sequi amet consectetur.
          </p>

          <div className="mt-4 ">
            <ProductCounter
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              count={quantity}
            />
          </div>

          <div className="border bg-gray-400 h-1/10 w-full border-gray-400 inline-block mt-6"></div>
          <div className="flex flex-col lg:flex-row justify-start items-center gap-4 w-full mt-4 ">
            <span className="text-5xl  text-black">$299.00</span>
            {/* <span className="text-gray-500 lg:pt-4 lg:pl-4">
              <del>$399.00</del>
            </span> */}
            <Addtocartbutton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productmodel

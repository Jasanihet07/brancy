'use client'
import React, { useState } from "react"

const Shopsection = () => {

    const [priceRange, setPriceRange] = useState(50)

    return (
      <>
        <section className="flex justify-between ">
          {/* trending secstion */}
          <div>
            <select name="products">
              <option>Best selling</option>
              <option>Price High to Low</option>
              <option>Price Low to High</option>
              <option>Date New to Old</option>
              <option>Date Old to New</option>
            </select>
          </div>
          {/* price secstion */}
          <div className="flex ">
            <label className="">Price:</label>
            <input
              type="range"
              min={0}
              max={2500}
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-16 h-1"
            />
            <span className="ml-2">{priceRange}</span>
          </div>
          {/* Onsale secstion */}
          <div className="flex gap-2 ">
            <label>OnSale </label>
            <select className="h-8 w-18">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </section>
        <hr className="borderbg-sky-400  h-1/10 " />
      </>
    )
}

export default Shopsection 
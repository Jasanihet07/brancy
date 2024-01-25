import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaExpandAlt } from "react-icons/fa"

// import Productaddcart from "../Productaddcart/index"
import Price from "../Price/index"
import { Itemcard } from "@/utils/types"
import { item } from "../../lib/constData"

import Addtocartbutton from "../Addtocartbutton"
import LikeButton from "../Likebutton"
import Ratingnew from "../Ratingnew"
import AddToCartBtn from "../products/AddToCartBtn"


const Items = () => {
  

  return (
    <section className="flex flex-wrap justify-center gap-8 mb-5">
      {item.map((items, index) => (
        <div key={items.id}>
          <div
            className="relative overflow-hidden rounded-md group"
            style={{ backgroundColor: items.color }}
          >
            <div className="hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src={items.image}
                alt={items.name}
                width={350}
                height={400}
              />
            </div>

            <div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-1">
                <Link href="/product">
                  <button className="bg-transparent text-slate-700 px-2 py-2 rounded-full border-2 border-red-500">
                    <FaExpandAlt />
                  </button>
                </Link>

                <Addtocartbutton />
                <LikeButton />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Ratingnew stars={items.stars} numReviews={items.numReviews} />

            <div className="my-4 font-semibold text-2xl">{items.name}</div>

            {/* <Price disc={items.discountPrice} original={items.originalPrice} /> */}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Items

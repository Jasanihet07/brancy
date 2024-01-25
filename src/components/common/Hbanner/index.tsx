import React from "react"
import Image from "next/image"
// import Styles from "./banner.module.css"
// import Button from "../Button"
import { BannerPropsType } from "@/utils/types"
import Link from "next/link"

const Hbanner = ({ data }: BannerPropsType) => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center mb-8 bg-gradient-to-r from-white from-10% via-white via-40% to-sky-200 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-2/3 ">
        {/* Home section */}
        <div className="flex flex-col p-5 justify-center items-center md:relative ">
          {/* Home image */}
          <div className="flex items-center md:absolute top-2 ml-10">
            <Image
              src={data.backgroundBannerImage1}
              width={500}
              height={500}
              alt="img"
            />
          </div>
          <div className="z-10">
            <div className="w-full">
              <h1 className="text-blue-800 text-4xl lg:text-6xl sm:text-xs font-bold mt-4 md:mt-0 pt-0">
                CLEAN FRESH
              </h1>
            </div>

            <p className="text-blue-800 text-center align-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              possimus error tenetur sunt, repudiandae asperiores, ullam ex non
              maxime libero.
            </p>
            <Link href={"/products"}>
              <button className="tracking-widest mt-8  bg-transparent text-slate-700 px-4 py-2 rounded-full border-2 border-sky-500 hover:bg-sky-300 hover:border-sky-300 hover:text-white md:px-8 lg:px-12">
                BUY NOW
              </button>
            </Link>
          </div>
          {/* Other content in the first div */}
        </div>

        {/* Sign up section */}
        <div className="p-5">
          <div className="flex justify-center ">
            <Image
              src={data.backgroundBannerImage}
              width={500}
              height={500}
              alt="img"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hbanner

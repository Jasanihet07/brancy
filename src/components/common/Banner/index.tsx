import React from "react"
import Image from "next/image"
// import Styles from "./banner.module.css"
// import Button from "../Button"
import { AboutBannerPropsType } from "@/utils/types"

const Banner = ({ data }: AboutBannerPropsType) => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center  h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-2/3 ">
        {/* Home section */}
        <div className="flex flex-col p-5 justify-center items-center md:relative ">
          {/* Home image */}
          <div className="flex items-center md:absolute top-2 ml-10">
            <Image
              src={data.AboutBannerImage1}
              width={500}
              height={500}
              alt="img"
            />
          </div>
          <div className="z-10">
            <div className="w-full">
              <h1 className="text-blue-800 text-4xl lg:text-6xl sm:text-xs font-bold mt-4 md:mt-0 pt-0">
                <span>{data.heading1}</span>
              </h1>
              <p>
                <span>{data.heading2}</span>
              </p>
            </div>

            <p className="text-blue-800 text-center align-center">
              <span>{data.description}</span>
            </p>
          </div>
          {/* Other content in the first div */}
        </div>

        {/* Sign up section */}
        <div className="p-5">
          <div className="flex justify-center ">
            <Image
              src={data.AboutBannerImage}
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

export default Banner

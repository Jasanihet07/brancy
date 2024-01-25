import React from "react"
import Image from "next/image"
// import Styles from "./banner.module.css"
// import Button from "../Button"
import { BannerPropsType } from "@/utils/types"

const Hbanner = ({ data }: BannerPropsType) => {
  console.log(data.heading1)
  return (
    <div className="flex flex-col items-center justify-center w- flex-1 px-4 text-center  bg-gradient-to-r from-white from-10% via-white via-40% to-sky-200 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-2/3 ">
        {/* Home section */}
        <div className="flex flex-col p-5 justify-center items-center md:relative ">
          {/* Home image */}
          <div className="flex items-center md:absolute top-2 ml-10">
            <Image
              src={data.backgroundBannerImage1}
              alt="img"
              width={500}
              height={500}
            />
          </div>
          {/* <div className="z-10">
            <div className="w-full">
              <h1 className="text-blue-800 text-4xl lg:text-6xl sm:text-xs font-bold mt-4 md:mt-0 pt-0">
                <span className={data.heading1}>{data.heading1}</span>
              </h1>
              <span className={data.description}>{data.description}</span>
            </div>

            <p className="text-blue-800 text-center align-center"></p>
          </div> */}
          <div>
            <h1 className="text-blue-800 text-4xl lg:text-6xl font-light mt-4  md:mt-0 pt-0">
              <span>{data.heading1}</span>
            </h1>
            <p className="text-blue-800 underline text-lg mt-6 ">
              <span>{data.heading2}</span>
            </p>
            <p className="text-blue-800">
              <span>{data.description}</span>
            </p>
          </div>
          {/* Other content in the first div */}
        </div>

        {/* Sign up section */}
        <div className="p-5">
          <div className="flex justify-center ">
            <Image
              src={data.backgroundBannerImage}
              alt="img"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hbanner

//  <section className={Styles.gridSection}>
//       <div className={Styles.contentWrapper}>
//         <div className={Styles.content}>
//           <h2 className={Styles.heading}>{data.backgroundBannerImage1}</h2>

//         </div>

//       </div>
//       {data.backgroundBannerImage && (
//         <div className={Styles.backgroundBannerImage}>
//           <Image
//             src={data.backgroundBannerImage}
//             alt={"Banner Image"}
//             fill
//             style={{ objectFit: "contain" }}
//             className="z-10"
//           />
//         </div>
//       )}
//     </section>

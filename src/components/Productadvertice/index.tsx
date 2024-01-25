import React from "react"
import Image from "next/image"
// import { productadverticetype } from "@/utils/types"
import Productad1 from "./advertice1.webp"
import Productad2 from "./advertice2.webp"
import Productad3 from "./advertice3.webp"

// { data }: productadverticetype
const Productadvertice = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 group m-4">
        {/* <Image src={data.image1} alt="advrtticement" width={100} height={100} />
        <Image src={data.image2} alt="advrtticement" width={100} height={100} />
        <Image src={data.image3} alt="advrtticement" width={100} height={100} /> */}
        <div className=" hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src={Productad1}
            alt="proadd"
            width={350}
            height={350}
            className="rounded-md"
          />
        </div>
        <div className="hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src={Productad2}
            alt="proadd"
            width={350}
            height={350}
            className="rounded-md"
          />
        </div>
        <div className="hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src={Productad3}
            alt="proadd"
            width={350}
            height={350}
            className="rounded-md"
          />
        </div>
      </div>
    </>
  )
}

export default Productadvertice

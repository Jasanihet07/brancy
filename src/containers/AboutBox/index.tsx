import React from "react"
import Link from "next/link"
import Image from "next/image"
import { AboutboxsPropsType } from "@/utils/types"

interface Props {}

const Aboutbox = ({ data1 }: AboutboxsPropsType) => {
  return (
    <main>
      <section className="flex flex-wrap mt-10 gap-8">
        <div className="flex-1 flex justify-center items-center flex-col w-fit h-fit lg:w-330 lg:h-220 md:w-240 md:h-220 border-2 border-red-400 m-2 rounded-3xl p-5">
          {/* Content for Box 1 */}
          <div className="m-4 flex justify-center items-center">
            <Image src={data1.Aboutbox1} alt="Image 1" width={80} height={80} />
          </div>
          <div className="border bg-red-200 h-1/10 w-72 border-red-200 inline-block mb-4"></div>
          {/* <h3 className="text-6xl w-80 overflow-hidden">5000+</h3> */}
          {/* <p className="text-2xl m-2">Clients</p> */}
          <span className="flex justify-center items-center text-6xl w-fit overflow-hidden">
            {data1.Count1}
          </span>
          <p className="text-2xl m-2">{data1.Title1}</p>
        </div>

        <div className="flex-1 flex justify-center items-center flex-col w-fit h-fit lg:w-330 lg:h-220 md:w-240 md:h-220 border-2 border-red-400 m-2 rounded-3xl p-5">
          <div className="m-4 flex justify-center items-center">
            <Image src={data1.Aboutbox2} alt="Image 2" width={80} height={80} />
          </div>
          <div className="border bg-red-200 h-1/10 w-72 border-red-200 inline-block mb-4"></div>
          <span className="flex justify-center items-center text-6xl w-fit overflow-hidden">
            {data1.Count2}
          </span>
          <p className="text-2xl m-2">{data1.Title2}</p>
        </div>

        <div className="flex-1 flex justify-center items-center flex-col w-fit h-fit lg:w-330 lg:h-220 md:w-240 md:h-220 border-2 border-red-400 m-2 rounded-3xl p-5">
          <div className="m-4 flex justify-center items-center">
            <Image src={data1.Aboutbox3} alt="Image 3" width={80} height={80} />
          </div>
          <div className="border bg-red-200 h-1/10 w-72 border-red-200 inline-block mb-4"></div>
          <span className="flex justify-center items-center text-6xl w-fit overflow-hidden">
            {data1.Count3}
          </span>
          <p className="text-2xl m-2">{data1.Title3}</p>
        </div>
      </section>
    </main>
  )
}

export default Aboutbox

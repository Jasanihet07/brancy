// import Banner from "@/components/common/Banner"
// import { shopPageBanner } from "@/lib/constData"
import Image from "next/image"
import { AboutBannerPropsType } from "@/utils/types"

const Aboutstory = ({ data }: AboutBannerPropsType) => {
  return (
    <div className="">
      <div className="flex justify-center text-center ">
        <h2 className="mt-8">{data.heading2}</h2>
      </div>
      <div className="flex justify-center text-center text-sm ">
        <p className="">{data.description1}</p>
      </div>
    </div>
  )
}

export default Aboutstory

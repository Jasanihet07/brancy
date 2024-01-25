// import Banner from "@/components/common/Banner"
// import { shopPageBanner } from "@/lib/constData"
import Image from "next/image"
import { AboutBannerPropsType } from "@/utils/types"


const AboutCarosal = ({ data }: AboutBannerPropsType) => {
  return (
    <div className="m-16 ">
      <div className="flex justify-center p-4 mt-16 w-full h-32  ">
       
        <div className="relative w-full h-full ">
          <Image src={data.Carosal1} fill className="object-contain" alt="img" />
        </div>
        <div className="relative w-full h-full ">
          <Image src={data.Carosal2} fill className="object-contain" alt="img" />
        </div>
        <div className="relative w-full h-full ">
          <Image src={data.Carosal3} fill className="object-contain" alt="img" />
        </div>
        <div className="relative w-full h-full ">
          <Image src={data.Carosal4} fill className="object-contain" alt="img" />
        </div>
       
      </div>
    </div>
  )
}

export default AboutCarosal

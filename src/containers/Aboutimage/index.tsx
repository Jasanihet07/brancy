// import Banner from "@/components/common/Banner"
// import { shopPageBanner } from "@/lib/constData"
import Image from "next/image"
import { AboutboxsPropsType } from "@/utils/types"

const Aboutimage = ({ data1 }: AboutboxsPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 mb-10">
      <Image
        src={data1.Imgabout}
        alt="img"
        width={1000}
        height={1000}
        className=""
      />
    </div>
  )
}

export default Aboutimage

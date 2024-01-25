// import Banner from "@/components/common/Banner"
// import { shopPageBanner } from "@/lib/constData"
import { ShopBannerPropsType } from "@/utils/types"
import ComHeader from "../common/ComHeader"

const ShopBanner = ({ data }: ShopBannerPropsType) => {
  return (
    <div>
      <ComHeader />
      <div className="bg-[#FFF3DA] w-full h-40  py-10 px-8 sm:px-8 md:px-16 lg:px-24 xl:px-16">
        <div className="font-sans mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 ">
          <p className="flex gap-2">
            <a href="/" className="text-xl">
              {data.Homeheading1}
            </a>
            /<span>{data.Homeheading2}</span>
          </p>
        </div>
        <div className="sm:mx-8 md:mx-16 lg:mx-22 xl:mx-32 mt-4 text-3xl">
          <span>{data.Homeheading3}</span>
        </div>
      </div>
    </div>
  )
}

export default ShopBanner

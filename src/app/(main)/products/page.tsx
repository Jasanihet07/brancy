// import ProductsBanner from "@/containers/ProductsBanner"
// import ProductsGrid from "@/containers/ProductsGrid"
import ShopBanner from "@/components/ShopBanner"
import { Metadata } from "next"
import { shopPageBanner } from "@/lib/constData"
import Productbrands from "@/components/ProductBrand"
import Items from "@/components/Item"
import shopbaner from "@/public/images/banershop.webp"
import Image from "next/image"
import Shopsection from "@/components/shopsection"
import ProductsGrid from "@/containers/ProductsGrid"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function ProductsPage() {
  return (
    <>
      <ShopBanner data={shopPageBanner} />
      {/* <Shopsection /> */}
      <Productbrands />
      {/* <Items /> */}
      <ProductsGrid />
      <section>
        <div className=" flex justify-center">
          <Image
            src={shopbaner}
            alt={"baner"}
            className=" mt-0  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          />
        </div>
      </section>
    </>
  )
}

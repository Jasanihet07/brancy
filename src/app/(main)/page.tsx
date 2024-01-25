import Items from "@/components/Item"
import Productbrands from "@/components/ProductBrand"
import Productadvertice from "@/components/Productadvertice"
import Header from "@/components/common/Header"
import HomeBanner from "@/containers/HomeBanner"
import ProductsGrid from "@/containers/ProductsGrid"
// import HomeProducts from "@/containers/HomeProducts"
// import TestimonialCarousel from "@/containers/TestimonialCarousel"
// import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cosmetic",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Productbrands />
      <div className="flex flex-col mb-16 mt-8">
        <h1 className="flex justify-center">Top Sale</h1>
        <p className="flex justify-center text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> ut aliquam,
          purus sit amet luctus venenatis
        </p>
      </div>
      {/* <Items /> */}
      <ProductsGrid />
      <Productadvertice />
    
      </>
  )
}

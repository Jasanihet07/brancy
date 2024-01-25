import Aboutbox from "@/containers/AboutBox"
import AboutUsBanner from "@/containers/AboutUsBanner"
// import TestimonialCarousel from "@/containers/TestimonialCarousel"
// import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"
import React from "react"
import {Aboutboxdata} from "@/lib/constData"
import Image from "next/image"
import { AboutboxsPropsType } from "@/utils/types"
import Aboutimage from "@/containers/Aboutimage"
import ComHeader from "@/components/common/ComHeader"
import AboutCarosal from "@/containers/AboutCarosal"
import { aboutUsPageBanner } from "@/lib/constData"
import Aboutstory from "@/containers/Aboutstory"

export const metadata: Metadata = {
  title: "About Us",
  description: "About our Bea Ypu",
}

const page = () => {
  return (
    <>
      <ComHeader />
      <AboutUsBanner />
      <Aboutbox data1={Aboutboxdata} />
      <AboutCarosal data={aboutUsPageBanner} />
      <Aboutimage data1={Aboutboxdata} />
      <Aboutstory data={aboutUsPageBanner} />

      {/* <WhyChooseUs /> */}
      {/* <TestimonialCarousel /> */}
    </>
  )
}

export default page

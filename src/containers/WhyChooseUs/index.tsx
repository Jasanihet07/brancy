import Image from "next/image"
import React from "react"
// import style from "./whychooseus.module.css"
import { Productbrands } from "@/lib/constData"
import clsx from "clsx"
// import ServiceCard from "@/components/ServiceCard"

type Props = {}

const WhyChooseUs = (props: Props) => {
  return (
    
      <div className="flex flex-wrap justify-center">
        {Array.isArray(Productbrands) &&
          Productbrands.map((_Productbrands: any, index: any) => (
            <div key={_Productbrands.id}>
              <section className="flex flex-wrap m-4 mb-28git  justify-center">
                <div
                  className={clsx(
                    "flex flex-col justify-center  w-40  text-black h-56 rounded-3xl",
                    _Productbrands.color
                  )}
                >
                  <div className="flex justify-center mb-10">
                    <Image
                      src={_Productbrands.image}
                      width={60}
                      height={60}
                      alt="img"
                      className="hover:animate-spin "
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="border bg-red-200 h-1/10 w-10 border-red-200 inline-block"></div>
                  </div>
                  <p className="flex justify-center pt-5">
                    {_Productbrands.name}
                  </p>
                </div>
              </section>
            </div>
          ))}
      </div>

      /*{ <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.headingWrapper}>
           
          </div>
          <div className={style.servicesWrapper}>
            
          </div>
        </div>
        <div className={style.imageWrapper}>
          <div className={style.image}>
           
          </div>
        </div>
      </div> }*/
    
  )
}

export default WhyChooseUs

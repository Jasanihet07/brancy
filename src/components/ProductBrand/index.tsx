import React from "react"
import Image from "next/image"
import Link from "next/link"
import clsx, { ClassArray, ClassDictionary } from "clsx"
import { Productbrand } from "@/utils/types"
import { Productbranded } from "../../lib/constData"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

const Productbrands = () => {
  return (
    <Link href="/products">
    <div className="flex flex-wrap justify-center">
      {Productbranded.productsbrand.map(
        (
          productbrand: {
            id: React.Key | null | undefined
            color:
              | string
              | number
              | boolean
              | ClassArray
              | ClassDictionary
              | null
              | undefined
            image: string | StaticImport
            name:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined
          },
          index: any
        ) => (
          <div key={productbrand.id}>
            <div className="flex flex-wrap m-4 my-8 justify-center">
              <div
                className="flex flex-col justify-center  w-40  text-black h-56 rounded-3xl"
                style={{ backgroundColor : productbrand.color }}
              >
                <div className="flex justify-center mb-10">
                  <Image
                    src={productbrand.image}
                    width={60}
                    height={60}
                    alt="img"
                    className="hover:animate-spin "
                  />
                </div>
                <div className="flex justify-center">
                  <div className="border bg-red-200 h-1/10 w-10 border-red-200 inline-block"></div>
                </div>
                <p className="flex justify-center pt-5">{productbrand.name}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
    </Link>
  )
}

export default Productbrands

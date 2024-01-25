/* eslint-disable react/jsx-no-duplicate-props */
"use client"
import { memo, useEffect, useRef, useState } from "react"
import clsx from "clsx"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import NextIcon from "@/public/icons/chevron-right.svg"
import PrevIcon from "@/public/icons/chevron-left.svg"
import X from "@/public/icons/cancel.svg"
import { Dialog } from "@headlessui/react"
import style from "./productOverviewImage.module.css"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Button from "@/components/common/Button"

type ProductOverviewImageProps = {
  productImagesData: Array<{
    id: string
    created_at?: Date
    updated_at?: Date
    deleted_at?: Date
    url: string
    metadata?: unknown
  }>
}

const ProductOverviewImage = ({
  productImagesData,
}: ProductOverviewImageProps) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [open, setOpen] = useState<boolean>(false)

  const [currentIndex, setCurrentIndex] = useState<number | null>(0)
  const swiperRef = useRef(null)
  const mainSwiperRef = useRef(null)

  const handleImagePopup = (url: string) => {
    setOpen(true)
  }

  const handleClosePopup = () => {
    setOpen(false)
  }

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex)
  }

  useEffect(() => {
    const goToSlide = () => {
      if (
        swiperRef.current &&
        swiperRef.current.swiper &&
        !isNaN(currentIndex)
      ) {
        swiperRef.current.swiper.slideTo(currentIndex)
      }
      if (
        mainSwiperRef.current &&
        mainSwiperRef.current.swiper &&
        !isNaN(currentIndex)
      ) {
        mainSwiperRef.current.swiper.slideTo(currentIndex)
      }
    }

    goToSlide()
  }, [open, currentIndex])

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClosePopup}
        as="div"
        className="fixed top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-50 p-4 animate-opacity"
      >
        <Dialog.Panel className="relative w-full max-w-3xl mx-auto h-full bg-white p-[4%] rounded-md">
          <div className="absolute top-5 right-5 z-10">
            <Button
              variant="round"
              onClick={handleClosePopup}
              className={"bg-white"}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="relative h-full w-full">
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              navigation={true}
              // thumbs={{ swiper: thumbsSwiper }}
              onSlideChange={handleSlideChange}
              navigation={{
                prevEl: ".productPopupCarouselPrevBtn",
                nextEl: ".productPopupCarouselNextBtn",
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full h-full rounded-md"
            >
              {productImagesData?.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image
                      src={item.url}
                      fill
                      style={{ objectFit: "contain" }}
                      alt="productimage"
                      priority={true}
                    />
                  </SwiperSlide>
                )
              })}
              <button
                type="button"
                className="productPopupCarouselPrevBtn swiper-custom-navigation-btn disabled:bg-gray/30 !bg-opacity-100 !text-white left-0 -translate-y-1/2"
              >
                <PrevIcon className="w-6 aspect-square" />
                <span className="sr-only">Previous button</span>
              </button>
              <button
                type="button"
                className="productPopupCarouselNextBtn swiper-custom-navigation-btn disabled:bg-gray/30 !bg-opacity-100 !text-white right-0 -translate-y-1/2"
              >
                <NextIcon className="w-6 aspect-square" />
                <span className="sr-only">Next Button</span>
              </button>
            </Swiper>
          </div>
        </Dialog.Panel>
      </Dialog>
      <div className={style.mainwrapper}>
        <Swiper
          ref={mainSwiperRef}
          spaceBetween={10}
          navigation={true}
          // thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            prevEl: ".productCarouselPrevBtn",
            nextEl: ".productCarouselNextBtn",
          }}
          onSlideChange={handleSlideChange}
          modules={[FreeMode, Navigation, Thumbs]}
          className={style.main_image}
        >
          {productImagesData?.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                onClick={() => handleImagePopup(item.url)}
              >
                <Image
                  src={item.url}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="productimage"
                  priority={true}
                />
              </SwiperSlide>
            )
          })}
          <button
            type="button"
            className="productCarouselPrevBtn swiper-custom-navigation-btn left-4 -translate-y-1/2"
          >
            <PrevIcon className="w-6 aspect-square" />
            <span className="sr-only">Previous button</span>
          </button>
          <button
            type="button"
            className="productCarouselNextBtn swiper-custom-navigation-btn right-4 -translate-y-1/2"
          >
            <NextIcon className="w-6 aspect-square" />
            <span className="sr-only">Next Button</span>
          </button>
        </Swiper>

        <div className={`${style.image_group} noScrollbar`}>
          <Swiper
            // onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {productImagesData?.map((item, index) => {
              return (
                <SwiperSlide
                  onClick={() => {
                    setCurrentIndex(index)
                  }}
                  key={item.id}
                  className={clsx(
                    "bg-white box-border border-2 border-gray/20 inline-block rounded-xl relative aspect-[4/3] hover:cursor-pointer select-none",
                    { ["border-yellow/100"]: currentIndex === index }
                  )}
                >
                  <Image
                    src={item.url}
                    fill
                    alt="images"
                    style={{ objectFit: "cover" }}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default memo(ProductOverviewImage)

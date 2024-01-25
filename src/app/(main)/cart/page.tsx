import CartSummary from "@/components/CartSummary"
import Banner from "@/components/common/Banner"
import CartItemList from "@/containers/CartItemList"
import { cartPageBanner } from "@/lib/constData"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}

export default function Cart() {
  return (
    <>
      <Banner data={cartPageBanner} />
      <section className="grid grid-cols-1 md:grid-cols-[1fr_40%] justify-center gap-14">
        <CartItemList />
        <div className="flex flex-col gap-14 h-max sticky top-[100px]">
          <CartSummary />
        </div>
      </section>
    </>
  )
}

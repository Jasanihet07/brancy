"use client"

import ItemsPreviewTemplate from "@/modules/cart/templates/preview"
import DiscountCode from "@/modules/checkout/components/discount-code"
import CartTotals from "@/modules/common/components/cart-totals"
import Divider from "@/modules/common/components/divider"
import { useCart } from "medusa-react"

const CheckoutSummary = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8">
      <div className="w-full bg-white flex flex-col">
        <Divider className="my-6 small:hidden" />
        <p className="flex flex-row text-subtitle1 items-baseline">
          In your Cart
        </p>
        <Divider className="my-2" />
        <CartTotals data={cart} />
        <ItemsPreviewTemplate region={cart?.region} items={cart?.items} />
        <div className="my-6">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary

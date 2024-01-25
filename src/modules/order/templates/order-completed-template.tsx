"use client"

import { Order } from "@medusajs/medusa"
import Help from "@/modules/order/components/help"
import Items from "@/modules/order/components/items"
import OrderDetails from "@/modules/order/components/order-details"
import OrderSummary from "@/modules/order/components/order-summary"
import ShippingDetails from "@/modules/order/components/shipping-details"
import OnboardingCta from "@/modules/order/components/onboarding-cta"
import React, { useEffect, useState } from "react"
import Divider from "@/modules/common/components/divider"
import CartTotals from "@/modules/common/components/cart-totals"
import Link from "next/link"
import { Heading } from "@medusajs/ui"
import PaymentDetails from "../components/payment-details"
import ChevronDown from "@/modules/common/icons/chevron-down"

type OrderCompletedTemplateProps = {
  order: Order
}

const OrderCompletedTemplate: React.FC<OrderCompletedTemplateProps> = ({
  order,
}) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  return (
    <section className="py-6 min-h-[calc(100vh-64px)]">
      <div className="flex flex-col justify-center items-center gap-y-10 h-full w-full">
        {isOnboarding && <OnboardingCta orderId={order.id} />}
        <div className="flex flex-col gap-4 max-w-4xl h-full bg-white w-full p-4">
          <nav className="flex items-center h-full justify-between content-container border-b pb-2">
            <Link
              href="/"
              className="text-small-semi text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0"
            >
              <>
                <ChevronDown className="rotate-90" size={16} />
                <span className="mt-px text-caption2 uppercase">
                  Back to Home
                </span>
              </>
            </Link>
          </nav>
          <div className="flex flex-col gap-y-2">
            <p className="text-heading4">Thank you!</p>
            <p className="text-heading5">Your order was placed successfully.</p>
          </div>
          <OrderDetails order={order} />
          <p className="flex flex-row text-heading6">Summary</p>
          <Items
            items={order.items}
            region={order.region}
            cartId={order.cart_id}
          />
          <CartTotals data={order} />
          <ShippingDetails order={order} />
          <PaymentDetails order={order} />
          <Help />
        </div>
      </div>
    </section>
  )
}

export default OrderCompletedTemplate

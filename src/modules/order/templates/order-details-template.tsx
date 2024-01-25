"use client"

import { Order } from "@medusajs/medusa"
import Help from "@/modules/order/components/help"
import Items from "@/modules/order/components/items"
import OrderDetails from "@/modules/order/components/order-details"
import OrderSummary from "@/modules/order/components/order-summary"
import ShippingDetails from "@/modules/order/components/shipping-details"
import React from "react"

type OrderDetailsTemplateProps = {
  order: Order
}

const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
  order,
}) => {
  return (
    <section className="min-h-[calc(100vh-64px)] py-0">
      <div className="content-container flex justify-center">
        <div className="flex flex-col gap-2 h-full p-4 bg-white w-full">
          <OrderDetails order={order} showStatus />
          <Items
            items={order.items}
            region={order.region}
            cartId={order.cart_id}
          />
          <ShippingDetails order={order} />
          <OrderSummary order={order} />
          <Help />
        </div>
      </div>
    </section>
  )
}

export default OrderDetailsTemplate

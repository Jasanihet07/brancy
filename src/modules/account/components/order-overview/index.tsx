"use client"
import Spinner from "@/modules/common/icons/spinner"
import { useCustomerOrders } from "medusa-react"
import Link from "next/link"
import OrderCard from "../order-card"
import Button from "@/components/common/Button"
import { useState } from "react"

const OrderOverview = () => {
  const { orders, isLoading } = useCustomerOrders()
  const [visibleOrders, setVisibleOrders] = useState(3)

  const showMoreOrders = () => {
    setVisibleOrders((prevVisibleOrders) => prevVisibleOrders + 3)
  }

  if (isLoading) {
    return (
      <div className="text-gray-900 w-full flex justify-center pt-12">
        <Spinner size={36} />
      </div>
    )
  }

  if (orders?.length) {
    return (
      <div className="flex flex-col gap-8 w-full">
        {orders.slice(0, visibleOrders).map((o) => (
          <OrderCard key={o.id} order={o} />
        ))}
        {orders?.length > visibleOrders && (
          <button
            onClick={showMoreOrders}
            className="font-semibold text-ui-bg-interactive text-end"
          >
            Show More
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="text-subtitle1">Nothing to see here</p>
      <p className="text-caption1">
        You don&apos;t have any orders yet, let us change that {":)"}
      </p>
      <div className="mt-4">
        <Link href="/products" passHref>
          <Button variant="fill" color="green" className="!">
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default OrderOverview

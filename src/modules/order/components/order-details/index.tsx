import ChevronDown from "@/modules/common/icons/chevron-down"
import { Order } from "@medusajs/medusa"
import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const items = order.items.reduce((acc, i) => acc + i.quantity, 0)

  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div className="flex flex-col gap-2">
      <Text>
        We have sent the order confirmation details to{" "}
        <span className="font-semibold">{order.email}</span>.
      </Text>
      <Text className="font-semibold">
        Order Date:
        <span className="font-normal">
          {" "}
          {new Date(order.created_at).toDateString()}
        </span>
      </Text>
      <Text className="font-semibold flex flex-wrap">
        Order Id: &nbsp;
        <span className="text-caption2 text-blue-700"> #{order.id}</span>
      </Text>

      <div className="flex items-center text-compact-small gap-x-4">
        {showStatus && (
          <>
            <Text className="font-semibold">
              Order status:{" "}
              <span className="font-normal">
                {formatStatus(order.fulfillment_status)}
              </span>
            </Text>
            <Text className="font-semibold">
              Payment status:{" "}
              <span className="font-normal">
                {formatStatus(order.payment_status)}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails

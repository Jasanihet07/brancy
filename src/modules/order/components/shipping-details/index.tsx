import { Order } from "@medusajs/medusa"
import { Heading, Text } from "@medusajs/ui"
import Divider from "@/modules/common/components/divider"
import { formatAmount } from "medusa-react"

type ShippingDetailsProps = {
  order: Order
}

const ShippingDetails = ({ order }: ShippingDetailsProps) => {
  return (
    <div>
      <p className="flex flex-row text-heading6 py-2">Delivery</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col w-max flex-1">
          <Text className="txt-medium font-semibold mb-1">
            Shipping Address
          </Text>
          <Text className="txt-medium">
            {order.shipping_address.first_name}{" "}
            {order.shipping_address.last_name}
          </Text>
          <Text className="txt-medium">
            {order.shipping_address.address_1}{" "}
            {order.shipping_address.address_2}
          </Text>
          <Text className="txt-medium">
            {order.shipping_address.postal_code}, {order.shipping_address.city}
          </Text>
          <Text className="txt-medium">
            {order.shipping_address.country_code?.toUpperCase()}
          </Text>
        </div>

        <div className="flex flex-col w-max flex-1 ">
          <Text className="txt-medium font-semibold mb-1">Contact</Text>
          <Text className="txt-medium">{order.shipping_address.phone}</Text>
          <Text className="txt-medium">{order.email}</Text>
        </div>

        <div className="flex flex-col w-max flex-1">
          <Text className="txt-medium font-semibold mb-1">Method</Text>
          <Text className="txt-medium">
            {order.shipping_methods[0].shipping_option.name} (
            {formatAmount({
              amount: order.shipping_methods[0].price,
              region: order.region,
            })
              .replace(/,/g, "")
              .replace(/\./g, ",")}
            )
          </Text>
        </div>
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default ShippingDetails

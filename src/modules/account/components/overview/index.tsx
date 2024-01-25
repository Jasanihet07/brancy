import { Customer, Order } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import ChevronDown from "@/modules/common/icons/chevron-down"
import MapPin from "@/modules/common/icons/map-pin"
import Package from "@/modules/common/icons/package"
import User from "@/modules/common/icons/user"
import { formatAmount } from "medusa-react"
import Link from "next/link"
import { Text } from "@medusajs/ui"
import { useState } from "react"

type OverviewProps = {
  orders?: Order[]
  customer?: Omit<Customer, "password_hash">
}

const Overview = ({ orders, customer }: OverviewProps) => {
  const [visibleOrders, setVisibleOrders] = useState(3)

  const showMoreOrders = () => {
    setVisibleOrders((prevVisibleOrders) => prevVisibleOrders + 3)
  }
  return (
    <div>
      <div className="small:hidden">
        <div className="text-heading5">Hello {customer?.first_name}</div>
        <div className="text-base-regular">
          <ul>
            <li>
              <Link
                href="/account/profile"
                className="flex items-center justify-between py-4 border-b border-gray-200"
              >
                <>
                  <div className="flex items-center justify-center gap-x-2">
                    <User size={16} />
                    <span>Profile</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </>
              </Link>
            </li>
            <li>
              <Link
                href="/account/addresses"
                className="flex items-center justify-between py-4 border-b border-gray-200"
              >
                <>
                  <div className="flex items-center gap-x-2">
                    <MapPin size={16} />
                    <span>Addresses</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </>
              </Link>
            </li>
            <li>
              <Link
                href="/account/orders"
                className="flex items-center justify-between py-4 border-b border-gray-200"
              >
                <>
                  <div className="flex items-center gap-x-2">
                    <Package size={16} />
                    <span>Orders</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden small:block">
        <div className=" flex justify-between items-center mb-4">
          <Text className="flex gap-2 text-heading5">
            Hello
            <span className="font-semibold">{customer?.first_name}</span>
          </Text>
          <span className="text-caption2 text-gray">
            Signed in as:{" "}
            <span className="font-semibold text-black">{customer?.email}</span>
          </span>
        </div>
        <div className="flex flex-col py-8 border-t border-gray-200">
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
            <div className="flex items-start gap-x-20 mb-6">
              <div className="flex flex-col gap-y-4">
                <h3 className="text-body2">Profile</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-heading4 font-medium leading-none">
                    {getProfileCompletion(customer)}%
                  </span>
                  <span className="uppercase">Completed</span>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <h3 className="text-body2">Address(s)</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-heading4 font-medium leading-none">
                    {customer?.shipping_addresses?.length || 0}
                  </span>
                  <span className="uppercase">Saved</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-body2">Recent Orders</h3>
              </div>
              <ul className="flex flex-col gap-y-4 bg-gray-light bg-opacity-10">
                {orders ? (
                  orders.slice(0, visibleOrders).map((order) => {
                    return (
                      <li key={order.id}>
                        <Link href={`/order/details/${order.id}`}>
                          <Container className="bg-gray-50 items-center p-4">
                            <div className="flex justify-between gap-x-4 flex-1">
                              <div className="*:text-caption1">
                                <p className="font-semibold">Date Placed</p>
                                <p>
                                  {new Date(order.created_at).toDateString()}
                                </p>
                              </div>
                              <div className="*:text-caption1">
                                <p className="font-semibold">Order Id</p>
                                <p className="text-blue-700 text-caption2">
                                  #{order.id}
                                </p>
                              </div>
                              <div className="*:text-caption1">
                                <p className="font-semibold">Total Amount</p>
                                <p className="text-green-800 font-semibold">
                                  {formatAmount({
                                    amount: order.total,
                                    region: order.region,
                                    includeTaxes: false,
                                  })}
                                </p>
                              </div>
                              <button
                                className="flex items-center justify-between"
                                onClick={close}
                              >
                                <span className="sr-only">
                                  Go to order #{order.id}
                                </span>
                                <ChevronDown className="-rotate-90" />
                              </button>
                            </div>
                          </Container>
                        </Link>
                      </li>
                    )
                  })
                ) : (
                  <span>No recent orders</span>
                )}
                {orders?.length > visibleOrders && (
                  <button
                    onClick={showMoreOrders}
                    className="font-semibold text-ui-bg-interactive text-end"
                  >
                    Show More
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer?: Omit<Customer, "password_hash">) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  if (customer.billing_address) {
    count++
  }

  return (count / 4) * 100
}

export default Overview

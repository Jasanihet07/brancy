import { Order } from "@medusajs/medusa"
import { formatAmount } from "medusa-react"
import Link from "next/link"
import { useMemo } from "react"
import Image from "next/image"
import Button from "@/components/common/Button"

type OrderCardProps = {
  order: Omit<Order, "beforeInsert">
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return order.items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  }, [order])

  const numberOfProducts = useMemo(() => {
    return order.items.length
  }, [order])

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex justify-between bg-offwhite p-4 flex-wrap gap-4 max-md:flex-col">
        <div className="flex flex-1 items-center flex-wrap text-caption2 text-gray-700 gap-4 *:flex *:flex-col">
          <div>
            <p className="text-caption2 font-semibold">ORDER PLACED</p>
            <span> {new Date(order.created_at).toDateString()}</span>
          </div>
          <div>
            <p className="text-caption2 font-semibold">TOTAL</p>
            <span className="text-green-800 font-semibold">
              {formatAmount({
                amount: order.total,
                region: order.region,
                includeTaxes: false,
              })}
            </span>
          </div>
          <div>
            <p className="text-caption2 font-semibold">ITEMS</p>
            <span>{numberOfLines}</span>
            {/* {product.quantity} */}
          </div>
        </div>
        <div>
          <p className="text-caption2"># {order.id}</p>
          <Link
            href={`/order/details/${order.id}`}
            className="text-caption2 text-blue-700"
          >
            View Order Details
          </Link>
        </div>
      </div>
      <div className="text-body2 font-semibold px-4 capitalize">
        {order.status}
      </div>
      <div className="divide-y-2 px-4">
        {order.items.map((product) => {
          return (
            <div key={product.id}>
              <div className="flex items-center gap-4 py-4 overflow-hidden">
                <div className="relative max-w-[75px] rounded-md w-full aspect-square overflow-hidden">
                  <Image src={product.thumbnail} alt={product.id} fill />
                </div>
                <div className="flex flex-1 items-center text-small-regular text-gray-700">
                  <span className="text-gray-900 font-semibold line-clamp-2">
                    {product.title}
                  </span>
                  <span className="ml-2">x</span>
                  <span>{product.quantity}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    className="min-w-[200px] !py-1 bg-greenLight text-green border border-green"
                    as="a"
                    href={`/order/details/${order.id}`}
                  >
                    Order Details
                  </Button>
                  <Button
                    className="min-w-[200px] !py-1 bg-greenLight text-green border border-green"
                    as="a"
                    href={`/review/${order.id}`}
                  >
                    Review a Product
                  </Button>
                  <Button
                    className="min-w-[200px] !py-1 bg-greenLight text-green border border-green"
                    as="a"
                    href={`/return/${product.id}`}
                  >
                    Return Product
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderCard

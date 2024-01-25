"use client"
import { useCart } from "medusa-react"
import DiscountCode from "@/modules/checkout/components/discount-code"
import Button from "../common/Button"
import CartTotals from "@/modules/common/components/cart-totals"

type Props = {}

const CartSummary = (props: Props) => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <>
      {cart && cart.region && (
        <div className="flex flex-col gap-2 bg-gray/5 rounded-lg px-6 py-4 ">
          <p className="font-semibold text-heading6">Cart Totals</p>
          <div className="flex flex-col py-2 divide-y divide-gray">
            <CartTotals data={cart} />
          </div>
          <Button
            as="a"
            href="/checkout"
            variant="fill"
            color="green"
            className={"w-max"}
          >
            Checkout
          </Button>
        </div>
      )}
      <div className="flex flex-col gap-2 bg-gray/5 rounded-lg px-6 py-4">
        <DiscountCode cart={cart} />
      </div>
    </>
  )
}

export default CartSummary

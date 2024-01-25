"use client"
import React from "react"
import Button from "../common/Button"
import { formatAmount, useCart } from "medusa-react"

type Props = {}

const CartSliderSubtotal = (props: Props) => {
  const { cart } = useCart()

  if (!cart) return null

  return (
    <div className="border-t border-gray/30 flex flex-col pt-2 gap-4">
      <div>
        <div className="flex justify-between items-center text-body2 font-semibold">
          <span>Sub Total :</span>
          <span className="text-green-800">
            {cart &&
              cart.region &&
              formatAmount({
                amount: cart?.subtotal || 0,
                region: cart?.region,
                includeTaxes: false,
              })}
          
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        <div className="bg-sky-300 hover:bg-red-300 rounded-full">
          <Button as="a" href="#" variant="fill">
            <span className="sr-only">Checkout</span>
            View Cart
          </Button>
        </div>

        <div className="bg-sky-300 hover:bg-red-300 rounded-full">
          <Button as="a" href="/checkout" variant="fill">
            <span className="sr-only">Checkout</span>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartSliderSubtotal

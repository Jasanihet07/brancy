"use client"
import CartItem from "@/components/CartItem"

import LoadingSpinner from "@/components/common/LoadingSpinner"
import useEnrichedLineItems from "@/lib/hooks/use-enrich-line-items"
import CartIcon from "@/public/icons/cart.svg"
import { useCart, useMeCustomer } from "medusa-react"

const CartItemList = () => {
  const { cart } = useCart()
  const { isLoading } = useMeCustomer()
  const items = useEnrichedLineItems()

  if (!cart || !cart?.id?.length || isLoading) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
        <span>
          <LoadingSpinner />
        </span>
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <>
      {cart.items.length ? (
        <ul
          role="list"
          className="divide-y divide-gray/30 bg-gray/5 rounded-lg"
        >
          {items &&
            items
              .sort((a, b) => {
                return a.created_at > b.created_at ? -1 : 1
              })
              .map((item) => <CartItem key={item.id} item={item} />)}
        </ul>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
          <span>
            <CartIcon className="w-8 h-8" />
          </span>
          
          <p>Your cart is empty</p>
          <a href="/products" className="text-blue-600">
            Continue Shopping
          </a>
        </div>
      )}
    </>
  )
}

export default CartItemList

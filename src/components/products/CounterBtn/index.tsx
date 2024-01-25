"use client"
import { useState } from "react"
import MinusIcon from "@/public/icons/minus.svg"
import PlusIcon from "@/public/icons/plus.svg"
import { LineItem } from "@medusajs/medusa"
import { useStore } from "@/lib/context/store-context"
import clsx from "clsx"
// import RemoveModal from "../../common/RemoveModal"

const CounterBtn = ({
  size = "md",
  cartItem,
  className,
}: {
  size?: "sm" | "md"
  cartItem: LineItem
  className?: any
}) => {
  const { updateItem, deleteItem } = useStore()
  const [loading, setLoading] = useState(false)

  const [showModal, setShowModal] = useState<boolean>(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const removeItem = () => {
    deleteItem(cartItem.id)
    setShowModal(false)
  }

  const decreaseQuantity = () => {
    setLoading(true)
    if (cartItem?.quantity > 1) {
      updateItem({
        lineId: cartItem.id,
        quantity: cartItem?.quantity - 1,
        callback: () => {
          setLoading(false)
        },
      })
    } else {
      openModal()
      // deleteItem(cartItem.id)
      setLoading(false)
    }
  }

  const increaseQuantity = () => {
    setLoading(true)
    updateItem({
      lineId: cartItem.id,
      quantity: cartItem?.quantity + 1,
      callback: () => {
        setLoading(false)
      },
    })
  }

  return (
    <>
      <div className="flex gap-2 sm:gap-4 items-center border border-green w-max rounded-full overflow-hidden shadow-lg shadow-green/20">
        <button
          color="green"
          id="countdecrease"
          aria-label="countdecrease"
          className={clsx(
            [
              "border-r disabled:opacity-20 disabled:cursor-not-allowed hover:text-rose-600 duration-300",
              className,
            ],
            {
              "px-2": size === "md",
              "px-1": size === "sm",
            }
          )}
          onClick={decreaseQuantity}
          disabled={!!loading}
          type="button"
        >
          <MinusIcon className="w-5 aspect-square" />
        </button>
        <span className={`${size === "sm" ? "" : "text-subtitle2"}`}>
          {cartItem?.quantity}
        </span>
        <button
          id="countincrease"
          aria-label="countincrease"
          className={clsx(
            [
              "border-l disabled:opacity-20 disabled:cursor-not-allowed hover:text-rose-600 duration-300",
              className,
            ],
            {
              "px-2": size === "md",
              "px-1": size === "sm",
            }
          )}
          onClick={increaseQuantity}
          disabled={!!loading}
          type="button"
        >
          <PlusIcon className="w-5 aspect-square" />
        </button>
      </div>
      {/* <RemoveModal
        showModal={showModal}
        closeModal={closeModal}
        removeItem={removeItem}
      /> */}
    </>
  )
}

export default CounterBtn

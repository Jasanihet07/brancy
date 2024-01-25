"use client"
import Button from "@/components/common/Button"
import { useProductActions } from "@/lib/context/product-context"
import BagIcon from "@/public/icons/bag.svg"
import Plus from "@/public/icons/plus.svg"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { useCart } from "medusa-react"
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  useCallback,
  useRef,
  useState,
} from "react"
import CounterBtn from "../CounterBtn"
import Link from "next/link"
import LoadingSpinner from "@/components/common/LoadingSpinner"

type Props = {
  type?: "icon" | "text"
  product: PricedProduct
}

const AddToCartBtn = ({ type = "text", product }: Props) => {
  const [loading, setLoading] = useState(false)

  const { addToCart, inStock, variant } = useProductActions()

  const { cart } = useCart()

  const linkRef =
    useRef<
      DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
    >()

  const cartItem = cart?.items.find((x) => x.variant_id === variant?.id)

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault()

      setLoading(true)
      addToCart(() => {
        if (linkRef && linkRef.current) {
          console.log("click")

          linkRef.current.click()
        }
        setLoading(false)
      })
    },
    [addToCart]
  )

  return (
    <>
      <Link
        href="/cart"
        scroll={false}
        ref={linkRef}
        className="sr-only"
        aria-disabled
      >
        open cart
      </Link>
      {type === "icon" ? (
        <Button
          variant="round"
          color="black"
          onClick={handleAddToCart}
          disabled={!inStock || !variant || !!loading}
        >
          <span className="sr-only">add to card button</span>
          {loading ? (
            <LoadingSpinner className="border-white" />
          ) : (
            <Plus className="h-6" />
          )}
        </Button>
      ) : cartItem ? (
        <CounterBtn cartItem={cartItem} />
      ) : (
        <Button
          type="submit"
          variant="fill"
          color="green"
          onClick={handleAddToCart}
          disabled={!inStock || !variant || !!loading}
        >
          <>
            {loading ? (
              <LoadingSpinner className="border-green" />
            ) : (
              <BagIcon className="w-5 aspect-square" />
            )}
            <span>
              {!inStock
                ? "Out of stock"
                : !variant
                ? "Select variant"
                : "Add to cart"}
            </span>
          </>
        </Button>
      )}
    </>
  )
}

export default AddToCartBtn

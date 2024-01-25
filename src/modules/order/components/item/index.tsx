import { useStore } from "@/lib/context/store-context"
import { LineItem, Region } from "@medusajs/medusa"
import { Table, Text, clx } from "@medusajs/ui"
import LineItemOptions from "@/modules/common/components/line-item-options"
import LineItemPrice from "@/modules/common/components/line-item-price"
import LineItemUnitPrice from "@/modules/common/components/line-item-unit-price"
import CartItemSelect from "@/modules/cart/components/cart-item-select"
import Trash from "@/modules/common/icons/trash"
import Thumbnail from "@/modules/products/components/thumbnail"
import Link from "next/link"
import Image from "next/image"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      <div className="flex relative aspect-square w-full max-w-[75px] overflow-hidden rounded-md">
        <Image src={item.thumbnail} alt={item.title} fill />
      </div>
      <div className="flex flex-1 justify-between">
        <div className="text-left">
          <Text className="font-semibold">{item.title}</Text>
          <LineItemOptions variant={item.variant} />
        </div>

        <div className="flex flex-col items-end h-full justify-center">
          <span className="flex gap-x-1">
            <p className="text-caption1">{item.quantity}x </p>
            <LineItemUnitPrice item={item} region={region} style="tight" />
          </span>

          <LineItemPrice item={item} region={region} style="tight" />
        </div>
      </div>
    </div>
  )
}

export default Item

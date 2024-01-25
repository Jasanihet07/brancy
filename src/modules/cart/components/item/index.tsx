import { useStore } from "@/lib/context/store-context"
import { LineItem, Region } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import LineItemOptions from "@/modules/common/components/line-item-options"
import LineItemPrice from "@/modules/common/components/line-item-price"
import LineItemUnitPrice from "@/modules/common/components/line-item-unit-price"
import Link from "next/link"
import Image from "next/image"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  type?: "full" | "preview"
}

const Item = ({ item, region, type = "full" }: ItemProps) => {
  const { updateItem, deleteItem } = useStore()
  const { handle } = item.variant.product

  return (
    <div className="flex items-center gap-4">
      <Link
        href={`/products/${handle}`}
        className={clx(
          "flex relative aspect-square w-16 border rounded-lg overflow-hidden",
          {
            "w-16": type === "preview",
            "small:w-24 w-12": type === "full",
          }
        )}
      >
        <Image src={item.thumbnail} alt={item.title} fill />
      </Link>
      <div className="flex justify-between items-center gap-4 flex-1">
        <div className="text-left">
          <p className="text-caption1">{item.title}</p>
          <LineItemOptions variant={item.variant} />
        </div>
        {/* {type === "full" && (
        <div>
          <div className="flex gap-2">
            <button
              className="flex items-center gap-x-"
              onClick={() => deleteItem(item.id)}
            >
              <Trash size={18} />
            </button>
            <CartItemSelect
              value={item.quantity}
              onChange={(value) =>
                updateItem({
                  lineId: item.id,
                  quantity: parseInt(value.target.value),
                })
              }
              className="w-14 h-10 p-4"
            >
              {Array.from(
                [
                  ...Array(
                    item.variant.inventory_quantity > 0
                      ? item.variant.inventory_quantity
                      : 10
                  ),
                ].keys()
              )
                .slice(0, 10)
                .map((i) => {
                  const value = i + 1
                  return (
                    <option value={value} key={i}>
                      {value}
                    </option>
                  )
                })}
            </CartItemSelect>
          </div>
        </div>
      )}

      {type === "full" && (
        <div className="hidden small:table-cell">
          <LineItemUnitPrice item={item} region={region} style="tight" />
        </div>
      )} */}
        <div>
          <p
            className={clx("!pr-0", {
              "flex flex-col justify-center items-center text-caption2":
                type === "preview",
            })}
          >
            <span className="flex gap-2 ">
              <p className="text-caption2">{item.quantity}x </p>
              <LineItemUnitPrice item={item} region={region} style="tight" />
            </span>
          </p>
          <LineItemPrice item={item} region={region} style="tight" />
        </div>
      </div>
    </div>

    // <div className="flex">
    //   <div>
    //     <Link
    //       href={`/products/${handle}`}
    //       className={clx("flex", {
    //         "w-16": type === "preview",
    //         "small:w-24 w-12": type === "full",
    //       })}
    //     >
    //       <Thumbnail thumbnail={item.thumbnail} size="square" />
    //     </Link>
    //   </div>

    //   <div className="text-left">
    //     <p>{item.title}</p>
    //     <LineItemOptions variant={item.variant} />
    //   </div>

    //   {type === "full" && (
    //     <div>
    //       <div className="flex gap-2">
    //         <button
    //           className="flex items-center gap-x-"
    //           onClick={() => deleteItem(item.id)}
    //         >
    //           <Trash size={18} />
    //         </button>
    //         <CartItemSelect
    //           value={item.quantity}
    //           onChange={(value) =>
    //             updateItem({
    //               lineId: item.id,
    //               quantity: parseInt(value.target.value),
    //             })
    //           }
    //           className="w-14 h-10 p-4"
    //         >
    //           {Array.from(
    //             [
    //               ...Array(
    //                 item.variant.inventory_quantity > 0
    //                   ? item.variant.inventory_quantity
    //                   : 10
    //               ),
    //             ].keys()
    //           )
    //             .slice(0, 10)
    //             .map((i) => {
    //               const value = i + 1
    //               return (
    //                 <option value={value} key={i}>
    //                   {value}
    //                 </option>
    //               )
    //             })}
    //         </CartItemSelect>
    //       </div>
    //     </div>
    //   )}

    //   {type === "full" && (
    //     <div className="hidden small:table-cell">
    //       <LineItemUnitPrice item={item} region={region} style="tight" />
    //     </div>
    //   )}

    //   <div className="!pr-0">
    //     <span
    //       className={clx("!pr-0", {
    //         "flex flex-col items-end h-full justify-center": type === "preview",
    //       })}
    //     >
    //       {type === "preview" && (
    //         <span className="flex gap-x-1 ">
    //           <p className="text-ui-fg-muted">{item.quantity}x </p>
    //           <LineItemUnitPrice item={item} region={region} style="tight" />
    //         </span>
    //       )}
    //       <LineItemPrice item={item} region={region} style="tight" />
    //     </span>
    //   </div>
    // </div>
  )
}

export default Item

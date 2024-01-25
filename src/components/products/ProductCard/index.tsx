import Image from "next/image"
import Styles from "./productCard.module.css"
import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import Link from "next/link"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductCard = ({ product }: ProductTemplateProps) => {
  return (
    <div className={Styles.main}>
      <div className={Styles.productWrapper}>
        <Link
          scroll={false}
          href={`/products/${product?.handle}`}
          className={Styles.productImage}
        >
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              priority
              fill
              style={{ objectFit: "contain" }}
            />
          )}
        </Link>
        <div className={Styles.content}>
          <p className={Styles.productName}>{product?.title}</p>
          <Price id={product.id as string} />
        </div>
      </div>
      <div className={Styles.btnWrapper}>
        <AddToCartBtn type="icon" product={product} />
      </div>
    </div>
  )
}

export default ProductCard

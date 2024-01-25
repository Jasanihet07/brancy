import Image from "next/image"
import AddToCartBtn from "../AddToCartBtn"
import Button from "@/components/common/Button"
import Price from "@/components/Price"
import Share from "@/public/icons/share.svg"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductProvider } from "@/lib/context/product-context"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductModal = ({ product }: ProductTemplateProps) => {
  return (
    <ProductProvider product={product}>
      <div className="grid w-full max-w-2xl lg:max-w-3xl grid-cols-1 sm:grid-cols-2 rounded-md gap-8">
        <div className="relative w-full aspect-square">
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div className="flex flex-col justify-between gap-4">
          <h3 className="font-bold">{product?.title}</h3>
          <span className="line-clamp-3">
            <ReactMarkdown>{product?.description}</ReactMarkdown>
          </span>
          <Price id={product.id as string} />
          {/* <Rating rating={data.rating} reviewCount={data.reviewCount} /> */}
          <div className="flex items-center gap-2 w-full">
            <div className="flex-1">
              <AddToCartBtn product={product} />
            </div>
            <Button
              as="a"
              variant="fill"
              color="green"
              href={`/products/${product?.handle}`}
              className="flex-1"
            >
              More Details
            </Button>
            <Button
              as="a"
              href="/"
              variant="round"
              className="aspect-square px-2 py-2"
            >
              <Share className="w-6" />
            </Button>
          </div>
        </div>
      </div>
    </ProductProvider>
  )
}

export default ProductModal

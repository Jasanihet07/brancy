import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import style from "./productDetails.module.css"
import Button from "@/components/common/Button"
import Share from "@/public/icons/share.svg"
type ProductTemplateProps = {
  product: PricedProduct
}

const ProductDetails = ({ product }: ProductTemplateProps) => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between max-md:hidden ">
        <h3 className="font-bold mb-0">{product?.title}</h3>
        <Button
          as="a"
          href="/"
          variant="round"
          className="aspect-square px-2 py-2"
        >
          <Share className="w-6" />
        </Button>
      </div>
      <p className="font-bold max-md:hidden text-body2">{product?.subtitle}</p>
      <Price id={product.id as string} />
      {/* <Rating reviewCount={5} rating={3} /> */}
      <div>
        <p className="flex flex-wrap gap-2">
          <span className="font-bold">Category: </span>
          <span>{product?.type?.value}</span>
        </p>
        {product?.options?.map((option) => {
          return (
            <p key={option.id} className="flex flex-wrap gap-2">
              <span className="font-bold capitalize">{option?.title}: </span>
              <span className="flex flex-wrap gap-4">
                {option.values.map((value) => {
                  return <span key={value.id}>{value?.value}</span>
                })}
              </span>
            </p>
          )
        })}
      </div>
      <AddToCartBtn product={product} />
      <div className={`${style.prose} prose`}>
        <ReactMarkdown>{product?.description}</ReactMarkdown>
      </div>
      {product.metadata &&
        Object.entries(product?.metadata).map(([key, value]) => (
          <span key={key} className="flex flex-wrap gap-2">
            <p className="font-bold uppercase">{key}:</p>
            <div className={`${style.prose} prose`}>
              <ReactMarkdown>{value}</ReactMarkdown>
            </div>
          </span>
        ))}
    </div>
  )
}

export default ProductDetails

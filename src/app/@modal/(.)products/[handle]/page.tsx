
import OpenModal from "@/components/common/OpenModel"
import ProductModal from "@/components/products/ProductModal"
import { getProductByHandle } from "@/lib/data"
import { notFound } from "next/navigation"
type Props = {
  params: {
    handle: string
  }
}
const Page = async ({ params }: Props) => {
  const { products } = await getProductByHandle(params.handle).catch((err) => {
    notFound()
  })

  return (
    <OpenModal>
      {products && !products.length && <span>Product does not exist</span>}
      {products && products.length > 0 && (
        <ProductModal product={products[0]} />
      )}
    </OpenModal>
  )
}

export default Page

import Button from "@/components/common/Button"
import ProductDetails from "@/components/products/ProductDetails"
import ProductOverviewImage from "@/components/products/ProductOverviewImage"
import ProductReviewCard from "@/components/products/ProductReviewCard"
import ProductReviewForm from "@/components/products/ProductReviewForm"
import { productReviews } from "@/lib/constData"
import { ProductProvider } from "@/lib/context/product-context"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Share from "@/public/icons/share.svg"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductOverview = ({ product }: ProductTemplateProps) => {
  return (
    <>
      <ProductProvider product={product}>
        <section className="relative sm:mt-0 mt-4 grid md:grid-cols-2 items-start grid-cols-1 flex-1 gap-5 lg:gap-20">
          <div className="h-max md:sticky top-[100px]">
            <div className="flex items-start justify-between md:hidden">
              <h3 className="font-bold mb-4">{product.title}</h3>
              <Button
                as="a"
                href="/"
                variant="round"
                className="aspect-square px-2 py-2"
              >
                <Share className="w-6" />
              </Button>
            </div>
            <ProductOverviewImage
              productImagesData={[
                {
                  id: `${product.title}-thumbnail`,
                  url: product?.thumbnail,
                },
                ...product.images,
              ]}
            />
          </div>
          <div>
            <ProductDetails product={product} />
          </div>
        </section>
      </ProductProvider>
      <section className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h5 className="pt-8">Reviews</h5>
          {productReviews.map((review) => (
            <ProductReviewCard key={review.id} data={review} />
          ))}
        </div>
        <div>
          <h5 className="py-8">Leave a Review</h5>
          <ProductReviewForm />
        </div>
      </section>
    </>
  )
}

export default ProductOverview

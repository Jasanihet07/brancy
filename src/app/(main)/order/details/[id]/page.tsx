import medusaRequest from "@/lib/medusa-fetch"
import OrderDetailsTemplate from "@/modules/order/templates/order-details-template"
import ChevronDown from "@/public/icons/chevron-left.svg"

import { Metadata } from "next"
import Link from "next/link"

type Props = {
  params: { id: string }
}

async function getOrder(id: string) {
  const res = await medusaRequest("GET", `/orders/${id}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch order: ${id}`)
  }

  return res.body
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { order } = await getOrder(params.id)

  return {
    title: `Order #${order.id}`,
    description: `View your order`,
  }
}

export default async function CollectionPage({ params }: Props) {
  const { order } = await getOrder(params.id)

  return (
    <>
      <div className="px-container h-fit pt-6">
        <nav className="flex items-center h-full justify-between content-container px-4 pt-2 bg-white">
          <Link
            href="/"
            className="text-small-semi text-gray-700 flex items-center gap-x-2 uppercase  border-b  flex-1 basis-0"
          >
            <>
              <ChevronDown className="w-5" />
              <span className="mt-px text-caption2 uppercase">
                Back to Home
              </span>
            </>
          </Link>
        </nav>
      </div>
      <OrderDetailsTemplate order={order} />
    </>
  )
}

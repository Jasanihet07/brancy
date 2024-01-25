import { Order } from "@medusajs/medusa"
import { Container, Heading, Text } from "@medusajs/ui"
import { paymentInfoMap } from "@/modules/checkout/components/payment"
import Divider from "@/modules/common/components/divider"
import { formatAmount } from "medusa-react"

type PaymentDetailsProps = {
  order: Order
}

const currencyCodeSymbolMap: { [key: string]: string } = {
  USD: "$",
  EUR: "€",
  DKK: "kr",
  GBP: "£",
  SEK: "kr",
  NOK: "kr",
}

const PaymentDetails = ({ order }: PaymentDetailsProps) => {
  const payment = order.payments[0]
  return (
    <div>
      <p className="flex flex-row text-heading6 py-2">Payment</p>
      <div>
        {payment && (
          <div className="flex items-start gap-x-1 w-full">
            <div className="flex flex-col w-1/3">
              <Text className="txt-medium font-semibold mb-1">
                Payment Method
              </Text>
              <Text className="txt-medium">
                {paymentInfoMap[payment.provider_id].title}
              </Text>
            </div>
            <div className="flex flex-col w-2/3">
              <Text className="txt-medium font-semibold mb-1">
                Payment Details
              </Text>
              <div className="flex gap-2 txt-medium items-center">
                <div className="flex items-center h-7">
                  {paymentInfoMap[payment.provider_id].icon}
                </div>
                <Text>
                  {payment.provider_id === "stripe" && payment.data.card_last4
                    ? `**** **** **** ${payment.data.card_last4}`
                    : `${formatAmount({
                        amount: payment.amount,
                        region: order.region,
                      })} paid at ${new Date(order.created_at).toDateString()}`}
                </Text>
              </div>
            </div>
          </div>
        )}
      </div>

      <Divider className="mt-8" />
    </div>
  )
}

export default PaymentDetails

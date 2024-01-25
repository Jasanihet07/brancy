import { useCheckout } from "@/lib/context/checkout-context"
import { Text } from "@medusajs/ui"
import { CheckCircleSolid } from "@medusajs/icons"
import Spinner from "@/modules/common/icons/spinner"
import BillingAddress from "../billing_address"
import ShippingAddress from "../shipping-address"
import Divider from "@/modules/common/components/divider"
import Button from "@/components/common/Button"
import Edit from "@/public/icons/edit.svg"

const Addresses = () => {
  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isOpen, open },
    editShipping: { close: closeShipping },
    editPayment: { close: closePayment },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()

  const handleEdit = () => {
    open()
    closeShipping()
    closePayment()
  }

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-subtitle1 flex flex-row gap-x-2 items-center">
          Address
          <span className="text-green">{!isOpen && <CheckCircleSolid />}</span>
        </h2>
        {!isOpen && (
          <Button onClick={handleEdit} variant="icon" className="text-green">
            <Edit className="w-6" />
          </Button>
        )}
      </div>
      {isOpen ? (
        <div className="pb-8 ">
          <ShippingAddress checked={checked} onChange={onChange} />

          {!checked && (
            <div>
              <h2 className="text-subtitle1 gap-x-4 pb-6 pt-8">
                Billing address
              </h2>

              <BillingAddress />
            </div>
          )}
          <div className="py-2">
            <Button
              variant="fill"
              color="green"
              onClick={handleSubmit(setAddresses)}
            >
              Continue to Delivery
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="flex items-start gap-x-1 flex-wrap gap-4 w-full">
                  <div className="flex flex-col flex-1 w-max">
                    <Text className="txt-medium font-semibold mb-1">
                      Shipping Address
                    </Text>
                    <Text className="txt-medium">
                      {cart.shipping_address.first_name}{" "}
                      {cart.shipping_address.last_name}
                    </Text>
                    <Text className="txt-medium">
                      {cart.shipping_address.address_1}{" "}
                      {cart.shipping_address.address_2}
                    </Text>
                    <Text className="txt-medium">
                      {cart.shipping_address.postal_code},{" "}
                      {cart.shipping_address.city}
                    </Text>
                    <Text className="txt-medium">
                      {cart.shipping_address.country_code?.toUpperCase()}
                    </Text>
                  </div>

                  <div className="flex flex-col flex-1 w-max">
                    <Text className="txt-medium font-semibold mb-1">
                      Contact
                    </Text>
                    <Text className="txt-medium">
                      {cart.shipping_address.phone}
                    </Text>
                    <Text className="txt-medium">{cart.email}</Text>
                  </div>

                  <div className="flex flex-col flex-1 w-max">
                    <Text className="txt-medium font-semibold mb-1">
                      Billing Address
                    </Text>

                    {checked ? (
                      <Text className="txt-medium">
                        Billing- and delivery address are the same.
                      </Text>
                    ) : (
                      <>
                        <Text className="txt-medium">
                          {cart.billing_address.first_name}{" "}
                          {cart.billing_address.last_name}
                        </Text>
                        <Text className="txt-medium">
                          {cart.billing_address.address_1}{" "}
                          {cart.billing_address.address_2}
                        </Text>
                        <Text className="txt-medium">
                          {cart.billing_address.postal_code},{" "}
                          {cart.billing_address.city}
                        </Text>
                        <Text className="txt-medium">
                          {cart.billing_address.country_code?.toUpperCase()}
                        </Text>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <Spinner />
              </div>
            )}
          </div>
        </div>
      )}
      <Divider className="mt-8" />
    </div>
  )
}

export default Addresses

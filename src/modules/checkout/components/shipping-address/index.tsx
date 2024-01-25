import { CheckoutFormValues } from "@/lib/context/checkout-context"
import {
  emailRegex,
  nameRegex,
  phoneRegex,
  postalCodeRegex,
} from "@/lib/util/regex"
import ConnectForm from "@/modules/common/components/connect-form"

import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"
import Checkbox from "@/modules/common/components/checkbox"
import { Container } from "@medusajs/ui"
import Input from "@/components/common/formElements/index"



const ShippingAddress = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => {
  const { customer } = useMeCustomer()

  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4">
          <p className="text-small-regular">
            {`Hi ${customer.first_name}, do you want to use one of your saved addresses?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First name"
                type="text"
                {...register("shipping_address.first_name", {
                  required: {
                    message: "first_name is required...",
                    value: true,
                  },
                  maxLength: {
                    value: 50,
                    message: "name is too long",
                  },
                  minLength: {
                    value: 2,
                    message: "name is too short",
                  },
                  pattern: {
                    value: nameRegex,
                    message: "name should only contain alphabets ",
                  },
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Last name"
                type="text"
                {...register("shipping_address.last_name", {
                  required: {
                    message: "last_name is required...",
                    value: true,
                  },
                  maxLength: {
                    value: 50,
                    message: "name is too long",
                  },
                  minLength: {
                    value: 2,
                    message: "name is too short",
                  },
                  pattern: {
                    value: nameRegex,
                    message: "name should only contain alphabets ",
                  },
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Address"
                type="text"
                {...register("shipping_address.address_1", {
                  required: "Address is required",
                })}
                autoComplete="address-line1"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Company"
                type="text"
                {...register("shipping_address.company")}
                autoComplete="organization"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Postal code"
                type="number"
                {...register("shipping_address.postal_code", {
                  required: {
                    message: "Postal code is required...",
                    value: true,
                  },
                  pattern: {
                    value: postalCodeRegex,
                    message: "Please enter valid postal code",
                  },
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="City"
                type="text"
                {...register("shipping_address.city", {
                  required: "City is required",
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
                required
              />
              <CountrySelect
                {...register("shipping_address.country_code", {
                  required: "Country is required",
                })}
                autoComplete="country"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="State / Province"
                type="text"
                {...register("shipping_address.province")}
                autoComplete="address-level1"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <div className="my-8">
              <Checkbox
                label="Same as billing address"
                checked={checked}
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                label="Email"
                type="email"
                {...register("email", {
                  required: {
                    message: "Email is required...",
                    value: true,
                  },
                  pattern: {
                    value: emailRegex,
                    message: "Enter valid email",
                  },
                })}
                autoComplete="email"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Phone"
                type="tel"
                {...register("shipping_address.phone", {
                  required: {
                    message: "Phone number is required...",
                    value: true,
                  },
                  pattern: {
                    value: phoneRegex,
                    message: "Please enter vaild phone number ",
                  },
                })}
                autoComplete="tel"
                errors={errors}
                touched={touchedFields}
              />
            </div>
          </>
        )}
      </ConnectForm>
      
    </div>
  )
}

export default ShippingAddress

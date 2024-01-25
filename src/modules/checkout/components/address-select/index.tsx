import { Listbox, Transition } from "@headlessui/react"
import { useCheckout } from "@/lib/context/checkout-context"
import { Address } from "@medusajs/medusa"
import Radio from "@/modules/common/components/radio"
// import ChevronDown from "@/modules/common/icons/chevron-down"
import { ChevronUpDown } from "@medusajs/icons"
import ChevronDown from "@/public/icons/chevron-down.svg"
import clsx from "clsx"
import { isEqual, omit } from "lodash"
import { Fragment, useMemo, useState } from "react"
import { useWatch } from "react-hook-form"

type AddressSelectProps = {
  addresses: Address[]
}

const AddressSelect = ({ addresses }: AddressSelectProps) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)

  const { control, setSavedAddress } = useCheckout()

  const handleSelect = (id: string) => {
    const savedAddress = addresses.find((a) => a.id === id)

    if (savedAddress) {
      setSavedAddress(savedAddress)
    }

    setSelected(id)
  }

  const currentShippingAddress = useWatch({
    control,
    name: "shipping_address",
  })

  const selectedAddress = useMemo(() => {
    for (const address of addresses) {
      const checkEquality = isEqual(
        omit(address, [
          "id",
          "created_at",
          "updated_at",
          "country",
          "deleted_at",
          "metadata",
          "customer_id",
        ]),
        currentShippingAddress
      )

      if (checkEquality) {
        return address
      }
    }
  }, [currentShippingAddress, addresses])

  return (
    <Listbox onChange={handleSelect} value={selected}>
      <div className="relative">
        <Listbox.Button className="relative w-full flex justify-between items-center p-4 cursor-default focus:outline-none border border-green rounded-rounded bg-greenLight">
          {({ open }) => (
            <>
              <span className="block truncate">
                {selectedAddress
                  ? selectedAddress.address_1
                  : "Choose an address"}
              </span>
              <ChevronDown
                className={clsx("w-5 transition-rotate duration-200", {
                  "transform rotate-180": open,
                })}
              />
            </>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute flex justify-between px-4 z-20 w-full overflow-auto text-small-regular bg-white border border-top-0 max-h-52 focus:outline-none sm:text-sm">
            {addresses.map((address) => {
              return (
                <Listbox.Option
                  key={address.id}
                  value={address.id}
                  className="cursor-default select-none relative py-4"
                >
                  <div className="flex gap-x-4 items-start">
                    <Radio checked={selected === address.id} />
                    <div className="flex flex-col">
                      <span className="text-left text-base-semi">
                        {address.first_name} {address.last_name}
                      </span>
                      {address.company && (
                        <span className="text-small-regular text-gray-700">
                          {address.company}
                        </span>
                      )}
                      <div className="flex flex-col text-left text-base-regular">
                        <span>
                          {address.address_1}
                          {address.address_2 && (
                            <span>, {address.address_2}</span>
                          )}
                        </span>
                        <span>
                          {address.postal_code}, {address.city}
                        </span>
                        <span>
                          {address.province && `${address.province}, `}
                          {address.country_code?.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Listbox.Option>
              )
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default AddressSelect

import { medusaClient } from "@/lib/config"
import { useAccount } from "@/lib/context/account-context"
import useToggleState from "@/lib/hooks/use-toggle-state"
import { Address } from "@medusajs/medusa"
import CountrySelect from "@/modules/checkout/components/country-select"
import { Text } from "@medusajs/ui"
import { Trash } from "@medusajs/icons"
import Modal from "@/modules/common/components/modal"
import clsx from "clsx"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "@/components/common/formElements/Input"
import { nameRegex, phoneRegex, postalCodeRegex } from "@/lib/util/regex"
import Edit from "@/public/icons/edit.svg"
import Button from "@/components/common/Button"
import RemoveModal from "@/components/common/RemoveModal"

type FormValues = {
  first_name: string
  last_name: string
  city: string
  country_code: string
  postal_code: string
  province?: string
  address_1: string
  address_2?: string
  phone?: string
  company?: string
}

type EditAddressProps = {
  address: Address
  isActive?: boolean
}

const EditAddress: React.FC<EditAddressProps> = ({
  address,
  isActive = false,
}) => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { refetchCustomer } = useAccount()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      first_name: address.first_name || undefined,
      last_name: address.last_name || undefined,
      city: address.city || undefined,
      address_1: address.address_1 || undefined,
      address_2: address.address_2 || undefined,
      country_code: address.country_code || undefined,
      postal_code: address.postal_code || undefined,
      phone: address.phone || undefined,
      company: address.company || undefined,
      province: address.province || undefined,
    },
  })

  const submit = handleSubmit(async (data: FormValues) => {
    setSubmitting(true)
    setError(undefined)

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      company: data.company || "Personal",
      address_1: data.address_1,
      address_2: data.address_2 || "",
      city: data.city,
      country_code: data.country_code,
      province: data.province || "",
      postal_code: data.postal_code,
      phone: data.phone || "None",
      metadata: {},
    }

    medusaClient.customers.addresses
      .updateAddress(address.id, payload)
      .then(() => {
        setSubmitting(false)
        refetchCustomer()
        close()
      })
      .catch(() => {
        setSubmitting(false)
        setError("Failed to update address, please try again.")
      })
  })

  const removeAddress = () => {
    medusaClient.customers.addresses.deleteAddress(address.id).then(() => {
      refetchCustomer()
    })
  }

  const [showModal, setShowModal] = useState<boolean>(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const removeItem = () => {
    removeAddress()
    setShowModal(false)
  }

  return (
    <>
      <div
        className={clsx(
          "border rounded-rounded p-5 min-h-[220px] h-full w-full transition-colors",
          {
            "border-gray-900": isActive,
          }
        )}
      >
        <div className="flex flex-col">
          <div className="flex gap-4 justify-between w-full">
            <p className="text-left text-base-semi text-body2 mb-0">
              {address.first_name} {address.last_name}
            </p>
            <div className="flex gap-x-6 pt-2">
              <Button
                variant="icon"
                className="text-green h-max"
                onClick={open}
              >
                <Edit className="w-5" />
              </Button>
              <Button
                variant="icon"
                className="text-green h-max"
                onClick={openModal}
              >
                <Trash className="text-rose-500" />
              </Button>
            </div>
          </div>
          {address.company && (
            <Text className="text-gray-700">{address.company}</Text>
          )}
          <Text className="flex flex-col text-left">
            <span>
              {address.address_1}
              {address.address_2 && <span>, {address.address_2}</span>}
            </span>
            <span>
              {address.postal_code}, {address.city}
            </span>
            <span>
              {address.province && `${address.province}, `}
              {address.country_code?.toUpperCase()}
            </span>
          </Text>
        </div>
      </div>

      <Modal isOpen={state} close={close}>
        <Modal.Title>
          <p className="text-body2">Edit address</p>
        </Modal.Title>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-2 w-screen max-w-lg">
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="First name"
                type="text"
                {...register("first_name", {
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
                required
                errors={errors}
                autoComplete="given-name"
              />
              <Input
                label="Last name"
                type="text"
                {...register("last_name", {
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
                required
                errors={errors}
                autoComplete="family-name"
              />
            </div>
            <Input
              label="Company"
              type="text"
              {...register("company")}
              errors={errors}
            />
            <Input
              label="Address"
              type="text"
              {...register("address_1", {
                required: "Address is required",
              })}
              required
              errors={errors}
              autoComplete="address-line1"
            />
            <Input
              label="Apartment, suite, etc."
              type="text"
              {...register("address_2")}
              errors={errors}
              autoComplete="address-line2"
            />
            <div className="grid grid-cols-[144px_1fr] gap-x-2">
              <Input
                label="Postal code"
                type="number"
                {...register("postal_code", {
                  required: {
                    message: "Postal code is required...",
                    value: true,
                  },
                  pattern: {
                    value: postalCodeRegex,
                    message: "Please enter valid postal code",
                  },
                })}
                required
                errors={errors}
                autoComplete="postal-code"
              />
              <Input
                label="City"
                type="text"
                {...register("city", {
                  required: "City is required",
                })}
                errors={errors}
                required
                autoComplete="locality"
              />
            </div>
            <Input
              label="Province / State"
              type="text"
              {...register("province")}
              errors={errors}
              autoComplete="address-level1"
            />
            <CountrySelect
              {...register("country_code", { required: true })}
              autoComplete="country"
            />
            <Input
              label="Phone"
              type="tel"
              {...register("phone", {
                required: {
                  message: "phone number is required...",
                  value: true,
                },
                pattern: {
                  value: phoneRegex,
                  message: "please enter vaild phone number ",
                },
              })}
              errors={errors}
              autoComplete="phone"
            />
          </div>
          {error && (
            <div className="text-rose-500 text-small-regular py-2">{error}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="flex gap-3 mt-4">
            <Button
              variant="fill"
              color="green"
              onClick={close}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              variant="fill"
              color="green"
              onClick={submit}
              disabled={submitting}
              isLoading={submitting}
            >
              Save
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <RemoveModal
        showModal={showModal}
        closeModal={closeModal}
        removeItem={removeItem}
      />
    </>
  )
}

export default EditAddress

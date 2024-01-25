import { medusaClient } from "@/lib/config"
import { useAccount } from "@/lib/context/account-context"
import useToggleState from "@/lib/hooks/use-toggle-state"
import CountrySelect from "@/modules/checkout/components/country-select"
import { Heading } from "@medusajs/ui"
import Modal from "@/modules/common/components/modal"
import { Plus } from "@medusajs/icons"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "@/components/common/formElements/Input"
import { nameRegex, phoneRegex, postalCodeRegex } from "@/lib/util/regex"
import Button from "@/components/common/Button"

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

const AddAddress: React.FC = () => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { refetchCustomer } = useAccount()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const handleClose = () => {
    reset({
      first_name: "",
      last_name: "",
      city: "",
      country_code: "",
      postal_code: "",
      address_1: "",
      address_2: "",
      company: "",
      phone: "",
      province: "",
    })
    close()
  }

  const submit = handleSubmit(async (data: FormValues) => {
    setSubmitting(true)
    setError(undefined)

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      company: data.company || "",
      address_1: data.address_1,
      address_2: data.address_2 || "",
      city: data.city,
      country_code: data.country_code,
      province: data.province || "",
      postal_code: data.postal_code,
      phone: data.phone || "",
      metadata: {},
    }

    medusaClient.customers.addresses
      .addAddress({ address: payload })
      .then(() => {
        setSubmitting(false)
        refetchCustomer()
        handleClose()
      })
      .catch(() => {
        setSubmitting(false)
        setError("Failed to add address, please try again.")
      })
  })

  return (
    <>
      <Button
        variant="fill"
        color="green"
        // className="border border-ui-border-base rounded-rounded p-5 min-h-[220px] h-full w-full flex flex-col justify-between"
        onClick={open}
      >
        <Plus />
        <span>New Address</span>
      </Button>

      <Modal isOpen={state} close={handleClose}>
        <Modal.Title>
          <p className="text-body2">Add address</p>
        </Modal.Title>
        <Modal.Body>
          <div className="flex flex-col gap-y-2 w-screen max-w-lg">
            <div className="grid grid-cols-2 gap-x-2 max-sm:grid-cols-1">
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
            <div className="grid grid-cols-2 gap-x-2 max-sm:grid-cols-1">
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
              onClick={handleClose}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              variant="fill"
              color="green"
              className="min-h-0 bg-green text-white px-2 py-1 rounded-lg"
              onClick={submit}
              disabled={submitting}
              isLoading={submitting}
            >
              Save
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddAddress

import { useAccount } from "@/lib/context/account-context"
import { Customer } from "@medusajs/medusa"
import { useUpdateMe } from "medusa-react"
import React, { useEffect } from "react"
import { useForm, useWatch } from "react-hook-form"
import AccountInfo from "../account-info"
import Input from "@/components/common/formElements/Input"
import { nameRegex } from "@/lib/util/regex"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

type UpdateCustomerNameFormData = {
  first_name: string
  last_name: string
}

const ProfileName: React.FC<MyInformationProps> = ({ customer }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<UpdateCustomerNameFormData>({
    defaultValues: {
      first_name: customer.first_name,
      last_name: customer.last_name,
    },
  })

  const { refetchCustomer } = useAccount()

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  useEffect(() => {
    reset({
      first_name: customer.first_name,
      last_name: customer.last_name,
    })
  }, [customer, reset])

  const firstName = useWatch({
    control,
    name: "first_name",
  })
  const lastName = useWatch({
    control,
    name: "last_name",
  })

  const updateName = (data: UpdateCustomerNameFormData) => {
    return update(
      {
        id: customer.id,
        ...data,
      },
      {
        onSuccess: () => {
          refetchCustomer()
        },
      }
    )
  }

  return (
    <form
      onSubmit={handleSubmit(updateName)}
      className="w-full overflow-visible"
    >
      <AccountInfo
        label="Name"
        currentInfo={`${customer.first_name} ${customer.last_name}`}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        clearState={clearState}
      >
        <div className="grid grid-cols-2 gap-x-4">
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
            defaultValue={firstName}
            errors={errors}
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
            defaultValue={lastName}
            errors={errors}
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileName

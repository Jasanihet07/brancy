import { useAccount } from "@/lib/context/account-context"
import { Customer } from "@medusajs/medusa"
import { useUpdateMe } from "medusa-react"
import React, { useEffect } from "react"
import { useForm, useWatch } from "react-hook-form"
import AccountInfo from "../account-info"
import Input from "@/components/common/formElements/Input"
import { phoneRegex } from "@/lib/util/regex"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

type UpdateCustomerPhoneFormData = {
  phone: string
}

const ProfilePhone: React.FC<MyInformationProps> = ({ customer }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<UpdateCustomerPhoneFormData>({
    defaultValues: {
      phone: customer.phone,
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
      phone: customer.phone,
    })
  }, [customer, reset])

  const phone = useWatch({
    control,
    name: "phone",
  })

  const updatePhone = (data: UpdateCustomerPhoneFormData) => {
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
    <form onSubmit={handleSubmit(updatePhone)} className="w-full">
      <AccountInfo
        label="Phone"
        currentInfo={`${customer.phone}`}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        clearState={clearState}
      >
        <div className="grid grid-cols-1 gap-y-2">
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
            defaultValue={phone}
            errors={errors}
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfilePhone

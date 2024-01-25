"use client"
import { medusaClient } from "@/lib/config"
import { useAccount } from "@/lib/context/account-context"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../../components/common/formElements/Input"
import TextArea from "@/components/common/formElements/TextArea"
import SubmitButton from "@/components/common/formElements/SubmitButton"
import {
  emailRegex,
  nameRegex,
  phoneRegex,
  postalCodeRegex,
} from "@/lib/util/regex"
import style from "./contactform.module.css"
import Button from "@/components/common/Button"

type FormValues = {
  firstname: string
  lastname: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  // async function contactFormSubmit(formData: FormData) {
  //   "use server"

  //   const rawFormData = {
  //     firstname: formData.get("firstname"),
  //     lastname: formData.get("lastname"),
  //     email: formData.get("email"),
  //     message: formData.get("message"),
  //   }

  //   console.log("formdata", rawFormData)

  //   // mutate data
  //   // revalidate cache
  // }

  const submit = handleSubmit(async (data: FormValues) => {
    setSubmitting(true)
    setError(undefined)
    console.log(data)
    setSubmitting(false)
    reset()
  })

  return (
    <form className={style.form} onSubmit={submit}>
      <div className={style.formInput}>
        <div className={style.nameInput}>
          <Input
            label="First name"
            type="text"
            {...register("firstname", {
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
            {...register("lastname", {
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
          required
          errors={errors}
          wrapperClassName="col-span-2"
        />
        <TextArea
          label="Message"
          rows={5}
          wrapperClassName="col-span-2"
          {...register("message", {
            required: {
              message: "message is required...",
              value: true,
            },
          })}
          required
          errors={errors}
        />
      </div>
      <div>
        <SubmitButton
          variant="fill"
          color="green"
          title="send message"
          className="!rounded-xl"
          isLoading={submitting}
        >
          Send Message
        </SubmitButton>
      </div>
      {error && (
        <div className="text-rose-500 text-small-regular py-2">{error}</div>
      )}
    </form>
  )
}

export default ContactForm

"use client"
import SendIcon from "@/public/icons/send.svg"
import MailIcon from "@/public/icons/envelope-outline.svg"
import styles from "./newsLetter.module.css"
import Input from "../common/formElements/Input"
import { footerData } from "@/lib/constData"
import SubmitButton from "../common/formElements/SubmitButton"
import { emailRegex, nameRegex } from "@/lib/util/regex"
import { z } from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  name: string
  email: string
}

const NewsLetter: React.FC = (props: Props) => {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  // async function subscribeToNewsletter(formData: FormData) {
  //   "use server"

  //   const schema = z.object({
  //     email: z
  //       .string({
  //         invalid_type_error: "Invalid email",
  //       })
  //       .min(1, { message: "This field has to be filled." })
  //       .email("This is not a valid email.")
  //       .refine(
  //         (e) => e === "jk@test.com",
  //         "This email is not in our database"
  //       ),
  //     name: z
  //       .string({
  //         invalid_type_error: "Invalid name",
  //       })
  //       .min(4, { message: "min 4 char required.." })
  //       .max(6, { message: "min 6 char valid.." }),
  //   })

  //   const validatedFields = schema.safeParse({
  //     name: formData.get("name"),
  //     email: formData.get("email"),
  //   })

  //   if (!validatedFields.success) {
  //     console.log(validatedFields.error.flatten().fieldErrors)

  //     return {
  //       errors: validatedFields.error.flatten().fieldErrors,
  //     }
  //   }

  //   await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(formData)
  //     }, 3000)
  //   })

  //   console.log("formdata", validatedFields)

  //   return {
  //     message: "validated",
  //     formData: validatedFields,
  //   }

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
    <section>
      <div className={styles.newsLetterHeadingWrapper}>
        <MailIcon className={styles.newsLetterHeadingIcon} />
        <p className={styles.newsLetterHeading}>
          {footerData.newsLetter.heading}
        </p>
      </div>
      <form className={styles.newsLetterForm} onSubmit={submit}>
        <Input
          placeholder="Enter your name"
          type="text"
          {...register("name", {
            required: {
              message: "name is required...",
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
          errors={errors}
          autoComplete="given-name"
        />
        <Input
          placeholder="Enter your email"
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
          errors={errors}
        />

        <SubmitButton
          variant="fill"
          color="green"
          type="submit"
          isLoading={submitting}
        >
          <span className="sr-only">Subscribe to Newsletter button</span>
          <SendIcon className={styles.newsLetterFormIcon} />
        </SubmitButton>
        {error && (
          <div className="text-rose-500 text-small-regular py-2">{error}</div>
        )}
      </form>
    </section>
  )
}

export default NewsLetter

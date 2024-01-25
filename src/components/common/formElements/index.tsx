"use client"
import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import style from "./input.module.css"
import clsx from "clsx"
import { ErrorMessage } from "@hookform/error-message"
import { get } from "react-hook-form"
import Eye from "@/modules/common/icons/eye"
import EyeOff from "@/modules/common/icons/eye-off"

type Props = {
  name: string
  className?: string
  errors?: Record<string, unknown>
  wrapperClassName?: string
  label?: string
  touched?: Record<string, unknown>
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      label,
      errors,
      wrapperClassName,
      touched,
      type,
      className,
      ...props
    }: Props,
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(() => {
      if (type === "password" && showPassword) {
        setInputType("text")
      }

      if (type === "password" && !showPassword) {
        setInputType("password")
      }
    }, [type, showPassword])

    useImperativeHandle(ref, () => inputRef.current!)

    const hasError = get(errors, name) && get(touched, name)

    return (
      <div className={clsx([style.inputGroup, wrapperClassName])}>
        {label && (
          <label
            htmlFor={name}
            className={clsx(style.label, {
              [style.label_required]: props.required,
            })}
          >
            {label}
            {props?.required && <span className="text-rose-500">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            type={inputType}
            name={name}
            aria-invalid={hasError}
            className={clsx({
              [className || ""]: !!className,
            })}
            {...props}
            ref={inputRef}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-ui-fg-subtle px-4 focus:outline-none transition-all duration-150 outline-none focus:text-gray-700"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>
        {errors && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              return (
                <span className="py-1 text-rose-500 text-xsmall-regular capitalize">
                  {message}
                </span>
              )
            }}
          />
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export default memo(Input)

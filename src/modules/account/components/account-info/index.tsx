import { Disclosure } from "@headlessui/react"
import useToggleState from "@/lib/hooks/use-toggle-state"
import { Badge } from "@medusajs/ui"
import clsx from "clsx"
import { useEffect } from "react"
import Button from "@/components/common/Button"
import Edit from "@/public/icons/edit.svg"
import Cancel from "@/public/icons/cancel.svg"

type AccountInfoProps = {
  label: string
  currentInfo: string | React.ReactNode
  isLoading?: boolean
  isSuccess?: boolean
  isError?: boolean
  errorMessage?: string
  clearState: () => void
  children?: React.ReactNode
}

const AccountInfo = ({
  label,
  currentInfo,
  isLoading,
  isSuccess,
  isError,
  clearState,
  errorMessage = "An error occurred, please try again",
  children,
}: AccountInfoProps) => {
  const { state, close, toggle } = useToggleState()

  const handleToggle = () => {
    clearState()
    setTimeout(() => toggle(), 100)
  }

  useEffect(() => {
    if (isSuccess) {
      close()
    }
  }, [isSuccess, close])

  return (
    <>
      <div className="flex items-end justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="uppercase text-gray-700">{label}</span>
          <div className="flex items-center">
            {typeof currentInfo === "string" ? (
              <span className="font-semibold">{currentInfo}</span>
            ) : (
              currentInfo
            )}
          </div>
        </div>
        <div
          className="text-green cursor-pointer
        "
        >
          <Button
            variant="icon"
            onClick={handleToggle}
            type={state ? "reset" : "button"}
            className="text-green"
          >
            {state ? <Cancel className="h-6" /> : <Edit className="w-6" />}
          </Button>
        </div>
      </div>

      {/* Success state */}
      <Disclosure>
        <Disclosure.Panel
          static
          className={clsx(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden",
            {
              "max-h-[1000px] opacity-100": isSuccess,
              "max-h-0 opacity-0": !isSuccess,
            }
          )}
        >
          <Badge
            className="bg-green bg-opacity-10 text-green font-medium p-4 mt-4"
            color="green"
          >
            <span>{label} updated succesfully</span>
          </Badge>
        </Disclosure.Panel>
      </Disclosure>

      {/* Error state  */}
      <Disclosure>
        <Disclosure.Panel
          static
          className={clsx(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden",
            {
              "max-h-[1000px] opacity-100": isError,
              "max-h-0 opacity-0": !isError,
            }
          )}
        >
          <Badge className="p-2 my-4" color="red">
            <span>{errorMessage}</span>
          </Badge>
        </Disclosure.Panel>
      </Disclosure>

      <Disclosure>
        <Disclosure.Panel
          static
          className={clsx(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden",
            {
              "max-h-[1000px] opacity-100": state,
              "max-h-0 opacity-0": !state,
            }
          )}
        >
          <div className="flex flex-col gap-y-2 py-4">
            <div>{children}</div>
            <div className="flex items-center justify-end mt-2">
              <Button
                variant="fill"
                color="green"
                isLoading={isLoading}
                className="w-full small:max-w-[140px] !py-1"
                type="submit"
              >
                Save changes
              </Button>
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </>
  )
}

export default AccountInfo

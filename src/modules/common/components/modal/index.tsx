import { Dialog, Transition } from "@headlessui/react"
import X from "@/public/icons/cancel.svg"
import clsx from "clsx"
import React, { Fragment } from "react"

type ModalProps = {
  isOpen: boolean
  close: () => void
  size?: "small" | "medium" | "large"
  search?: boolean
  type?: "full" | "normal"
}

const Modal: React.FC<ModalProps> & {
  Title: React.FC
  Description: React.FC
  Body: React.FC
  Footer: React.FC
} = ({
  isOpen,
  close,
  size = "medium",
  search = false,
  children,
  type = "normal",
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[75]" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            className={clsx(
              "flex min-h-full justify-center text-center md:items-center md:px-2 lg:px-4",
              {
                "items-center": !search,
                "items-start": search,
              }
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  "flex transform text-left text-base transition overflow-scroll no-scrollbar rounded-xl",
                  {
                    ["w-screen sm:w-max max-sm:min-h-screen sm:max-h-[85vh] sm:h-fit"]:
                      type === "full",
                    ["w-max max-w-[90vw] max-h-[85vh] h-fit"]: type !== "full",
                    // "max-w-md": size === "small",
                    // "max-w-xl": size === "medium",
                    // "max-w-3xl": size === "large",
                    // "bg-transparent shadow-none": search,
                    // "bg-white shadow-xl border rounded-rounded": !search,
                  }
                )}
              >
                <div className="relative w-full h-full bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 ">
                  <button
                    type="button"
                    className="absolute right-4 top-4"
                    onClick={close}
                  >
                    <span className="sr-only">Close Modal button</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

const Title: React.FC = ({ children }) => {
  // const { close } = useModal()

  return (
    <Dialog.Title className="flex items-center justify-between">
      <div className="text-large-semi">{children}</div>
      {/* <div>
        <button onClick={close}>
          <X size={20} />
        </button>
      </div> */}
    </Dialog.Title>
  )
}

const Description: React.FC = ({ children }) => {
  return (
    <Dialog.Description className="flex text-small-regular text-gray-700 items-center justify-center pt-2 pb-4 h-full">
      {children}
    </Dialog.Description>
  )
}

const Body: React.FC = ({ children }) => {
  return <div className="flex justify-center">{children}</div>
}

const Footer: React.FC = ({ children }) => {
  return <div className="flex items-center justify-end gap-x-4">{children}</div>
}

Modal.Title = Title
Modal.Description = Description
Modal.Body = Body
Modal.Footer = Footer

export default Modal

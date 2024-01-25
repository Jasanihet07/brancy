"use client"
import Button from "@/components/common/Button"
import RemoveModal from "@/components/common/RemoveModel"
import { useStore } from "@/lib/context/store-context"
import Modal from "@/modules/common/components/modal"
import Trash from "@/modules/common/icons/trash"
import { Dialog } from "@headlessui/react"
import { useState } from "react"


const RemoveFromCartBtn = ({ id }: { id: string }) => {
  const { deleteItem } = useStore()
  const [showModal, setShowModal] = useState<boolean>(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const removeItem = () => {
    deleteItem(id)
    setShowModal(false)
  }

  return (
    <>
      <button
        className="flex items-center gap-x-1 text-rose-500 hover:text-rose-600 duration-300"
        onClick={openModal}
      >
        <Trash size={14} />
        <span>Remove</span>
      </button>
      <RemoveModal
        showModal={showModal}
        closeModal={closeModal}
        removeItem={removeItem}
      />
    </>
  )
}

export default RemoveFromCartBtn

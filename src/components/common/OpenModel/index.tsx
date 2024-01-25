"use client"

import Modal from "@/modules/common/components/modal"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

type Props = {
  children: React.ReactNode
  type?: "full"
}

const OpenModal = ({ children, type }: Props) => {
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  return (
    <Modal isOpen={true} close={onDismiss} type={"full"}>
      {children}
    </Modal>
  )
}

export default OpenModal

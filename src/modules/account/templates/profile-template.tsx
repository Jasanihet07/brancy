"use client"

import { useAccount } from "@/lib/context/account-context"
import ProfileEmail from "@/modules/account/components/profile-email"
import ProfileName from "@/modules/account/components/profile-name"
import ProfilePassword from "@/modules/account/components/profile-password"
import ProfileBillingAddress from "../components/profile-billing-address"
import ProfilePhone from "../components/profile-phone"

const ProfileTemplate = () => {
  const { customer, retrievingCustomer, refetchCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-y-4">
        <p className="text-heading5">Profile</p>
        <p className="text-caption1">
          View and update your profile information, including your name, email,
          and phone number. You can also update your billing address, or change
          your password.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <div>
          <ProfileName customer={customer} />
        </div>
        <hr />
        <div>
          <ProfileEmail customer={customer} />
        </div>
        <hr />
        <div>
          <ProfilePhone customer={customer} />
        </div>
        <hr />
        <div>
          <ProfilePassword customer={customer} />
        </div>
        <hr />
        <ProfileBillingAddress customer={customer} />
      </div>
    </div>
  )
}

export default ProfileTemplate

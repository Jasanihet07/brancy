import React from "react"
import { contactDetails } from "@/lib/constData"
import ContactDetailCard from "@/components/ContactDetailCard"
import ContactForm from "@/containers/ContactForm"
import style from "./contact.module.css"

const ContactUsSection = () => {
  return (
    <section>
      <div className={style.contactContainer}>
        <div className={style.contactDetailWrapper}>
          {contactDetails &&
            contactDetails.map((item) => {
              return <ContactDetailCard key={item.id} data={item} />
            })}
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactUsSection

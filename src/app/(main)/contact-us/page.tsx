import Contact from "@/components/Contact"
import ContactUsBanner from "@/containers/ContactUsBanner"
import ContactUsSection from "@/containers/ContactUsSection"
import { Metadata } from "next"
import { Contactdata } from "@/lib/constData"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us Here",
}

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Contact data={Contactdata} />
    </>
  )
}

export default page

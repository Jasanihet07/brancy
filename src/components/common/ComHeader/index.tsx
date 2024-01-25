import { navbarData } from "@/lib/constData"
import DesktopNav from "./Desktopnav"
import MobileNav from "./Mobilenav"

type Props = {}

const ComHeader = (props: Props) => {
  return (
    <>
      <header className="z-40  ">
        <DesktopNav data={navbarData} />
      </header>
    </>
  )
}

export default ComHeader

import { navbarData } from "@/lib/constData"
import DesktopNav from "./Desktopnav"
import MobileNav from "./Mobilenav"

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <header className="z-40 bg-gradient-to-r from-white from-10% via-white via-40% to-sky-200 ">
        <DesktopNav data={navbarData} />
      </header>
    </>
  )
}

export default Header

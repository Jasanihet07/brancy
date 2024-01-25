import Link from "next/link"
import style from "./desktopnav.module.css"
import { NavLinksType } from "@/utils/types"
import AccountBtn from "../AccountBtn"
import CartBtn from "../CartBtn"
import MobileNav from "../Mobilenav"
import NavLinks from "../NavLinks"
import Image from "next/image"
import SearchButton from "../SearchBtn"

const DesktopNav = ({ data }: { data: NavLinksType }) => {
  return (
    <div className={style.deskNav}>
      <MobileNav data={data} />

      <div className="relative max-md:hidden">
        <Image src={data.image} width={80} height={80} alt="logo" />
      </div>
      <div className={style.contentWrapper}>
        <NavLinks links={data} />

        <div className={style.icons}>
          <SearchButton />
          <AccountBtn />
          <CartBtn />
        </div>
      </div>
    </div>
  )
}

export default DesktopNav

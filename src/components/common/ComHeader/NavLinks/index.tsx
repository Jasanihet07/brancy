"use client"

import Link from "next/link"
import style from "./navLinks.module.css"
import { NavLinksType } from "@/utils/types"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const NavLinks = ({ links }: { links: NavLinksType }) => {
  const pathname = usePathname()

  return (
    <div className={style.navLinks}>
      {links &&
        links.navLinks.map((item) => {
          return (
            <Link
              href={item.url}
              key={item.id}
              className={clsx(`${style.link}`, {
                [style.active]: pathname === item.url,
              })}
            >
              {item.title}
            </Link>
          )
        })}
    </div>
  )
}

export default NavLinks

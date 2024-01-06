"use client"

import { styled } from "@mui/system"
import NavLink from "./NavLink"
import HeaderNav from "./Header"

export default function Nav() {
  let links = [
    {
      name: "home",
      href: "/",
      description: "main page",
      totalnumber: 0,
      symbol: "家",
    },
    {
      name: "scans",
      href: "/scans",
      description: "main page",
      totalnumber: 0,
      symbol: "漫画",
    },
    // {
    //   name: "artists",
    //   href: "/artists",
    //   description: "main page",
    //   totalnumber: 0,
    //   symbol: "漫画家",
    // },
    {
      name: "bookmarks",
      href: "/bookmarks",
      description: "main page",
      totalnumber: 0,
      symbol: "栞",
    },
    {
      name: "subscribe",
      href: "/subscribe",
      description: "main page",
      totalnumber: 0,
      symbol: "購",
    },
    {
      name: "account",
      href: "/account",
      description: "main page",
      totalnumber: 0,
      symbol: "己",
    },
  ]
  return (
    <NavContainer>
      <HeaderNav />
      {links.map((link) => (
        <NavLink link={link} key={link.name} />
      ))}
    </NavContainer>
  )
}

const NavContainer = styled("nav")(
  `
  display: flex;
  flex-direction: column;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(25,7,7,1) 100%);`
)

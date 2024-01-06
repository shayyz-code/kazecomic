"use client"

import { useState } from "react"

import { Box } from "@mui/system"
import PageHeader from "../PageHeader"
import Navbar from "./Navbar"
import Page from "./Page"

const list = [
  {
    icon: "S",
    url: "/newscan",
  },
  {
    icon: "C",
    url: "/newchapter",
  },
]

export default function Account({ data }) {
  const [activePage, setActivePage] = useState("/newscan")
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minHeight: "200px",
        bgcolor: "#000",
        border: "1px solid #f00",
        boxShadow: "10px 10px #000",
        padding: "15px 20px",
      }}
    >
      <PageHeader>Account</PageHeader>
      <Box sx={{ display: "flex", border: "1px solid #f00" }}>
        <Navbar
          data={list}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <Page activePage={activePage} />
      </Box>
    </Box>
  )
}

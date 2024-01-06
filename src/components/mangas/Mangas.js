"use client"

import bg3 from "$/photos/bg3.jpeg"

import { Box } from "@mui/system"
import Image from "next/image"
import HeaderMangas from "./HeaderMangas"
import { HeaderTitle } from "../nav/Header"
import MangaItem from "./MangaItem"

export default function Mangas({ data }) {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Box sx={{ position: "relative", bgcolor: "black" }}>
        <HeaderTitle
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            border: "2px solid #f00",
            padding: "0 5px 0 5px",
          }}
        >
          Edoscans
        </HeaderTitle>
        <Image src={bg3} layout="responsive" alt="Background picture" />
        <HeaderMangas />
        <Box sx={{ display: "flex", padding: "0 20px 0 20px" }}>
          {data &&
            data.length > 0 &&
            data.map((item) => <MangaItem key={item.id} data={item} />)}
        </Box>
      </Box>
    </Box>
  )
}

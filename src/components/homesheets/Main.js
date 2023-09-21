import bg2 from "$/photos/bg2.jpg"

import { Box } from "@mui/system"
import Nav from "../nav/Nav"
import Image from "next/image"

export default function Main() {
  return (
    <Box sx={{ display: "flex", bgcolor: "primary.main" }}>
      <Box>
        <Nav />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Image src={bg2} layout="intrinsic" alt="Background picture" />
      </Box>
    </Box>
  )
}

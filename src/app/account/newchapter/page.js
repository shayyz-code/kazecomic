import bg2 from "$/photos/bg2.jpg"
import NewChapter from "@/components/account/NewChapter"

import { Box } from "@mui/system"
import Image from "next/image"

export default function PageNewChapter() {
  return (
    <main>
      <Box sx={{ bgcolor: "primary.main" }}>
        <Image src={bg2} layout="intrinsic" alt="Background picture" />
        <NewChapter />
      </Box>
    </main>
  )
}

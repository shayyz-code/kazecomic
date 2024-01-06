import bg2 from "$/photos/bg2.jpg"
import NewManga from "@/components/account/NewManga"

import { Box } from "@mui/system"
import Image from "next/image"

export default function PageNewScan() {
  return (
    <main>
      <Box sx={{ bgcolor: "primary.main" }}>
        <Image src={bg2} layout="intrinsic" alt="Background picture" />
        <NewManga />
      </Box>
    </main>
  )
}

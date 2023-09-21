"use client"

import { Box } from "@mui/system"
import Chapter from "../scans/Chapter"
import HeaderChapter from "./HeaderChapter"

export default function Chapters({ data }) {
  return (
    <Box>
      <HeaderChapter />
      <Box
        sx={{ display: "flex", flexDirection: "column-reverse", padding: 2 }}
      >
        {data.map((chapter) => (
          <Chapter key={chapter.id} data={chapter} />
        ))}
      </Box>
    </Box>
  )
}

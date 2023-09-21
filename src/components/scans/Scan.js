"use client"

import { styled } from "@mui/system"
import HeaderScans from "./HeaderScans"
import ScanItem from "./ScanItem"

export default function Scan({
  data,
  currentIteration,
  handleBtnNext,
  handleBtnPrev,
}) {
  return (
    <ScanContainer>
      <HeaderScans />
      <ScanItem
        data={data}
        currentIteration={currentIteration}
        handleBtnNext={handleBtnNext}
        handleBtnPrev={handleBtnPrev}
      />
    </ScanContainer>
  )
}

const ScanContainer = styled("div")(
  ({ theme }) => `
  background: ${theme.palette.primary.bg};
  `
)

import bg1 from "$/photos/bg1.jpg"

import { Box, styled } from "@mui/system"
import PrimaryButton from "../PrimaryButton"
import Image from "next/image"

export default function MangaItem({ data }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ position: "relative" }}>
        <ScanItemHeader>
          <ImageOverlay />
          <Image
            src={data.profile}
            width={150}
            height={225}
            alt="Picture of this series"
            style={{
              filter: "sepia(100%)",
            }}
          />
          <Box>{data.name}</Box>
          <Box>{data.status}</Box>
          <Box component="span" sx={{ typography: "rating" }}>
            {data.rating}
          </Box>
        </ScanItemHeader>
      </Box>
      <Box sx={{ display: "flex", maxWidth: 150 }}>
        <PrimaryButton onClick={() => false}>View</PrimaryButton>
        <PrimaryButton onClick={() => false}>
          <span className="material-symbols-outlined">bookmark</span>
        </PrimaryButton>
      </Box>
    </Box>
  )
}

const ImageOverlay = styled("div")(
  ({ theme }) => `
  position: absolute;
  top: 10px;
  left: 10px;
  width: 150px;
  height: 225px;
  background: rgba(255, 0, 60, 0.5);
  z-index: 2;
  `
)

const ScanItemHeader = styled("div")(
  ({ theme }) => `
    background: rgba(10, 0, 0, 0.6);
    padding: 10px;
  `
)

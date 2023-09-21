import bg1 from "$/photos/bg1.jpg"

import { Box, styled } from "@mui/system"
import { Button } from "@mui/base"
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
      <Box sx={{ display: "flex" }}>
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

const PrimaryButton = styled(Button)(
  ({ theme }) => `
  position: relative;
  width: fit-content;
  height: 24px;
  padding: 2px 0 0 25px;
  z-index: 1;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s;
  border: 0;
  outline: 0;
  background: transparent;
  margin-left: 10px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    width: 100%;
    height: 24px;
    background: ${theme.palette.primary.main};
    border: 2px solid ${theme.palette.primary.main};
    transform: skewX(-25deg);
    z-index: -1;
    
    
  }
  
  &:hover {
    color: ${theme.palette.primary.main};

    &:before {
      background-color: transparent;
    }
  }
  
  `
)

import { Box, styled } from "@mui/system"
import PrimaryButton from "../PrimaryButton"
import Link from "next/link"

export default function Page({ activePage }) {
  switch (activePage) {
    case "/newscan":
      return (
        <StyledPage>
          <PrimaryButton onClick={() => false}>
            <Link href={"/account/newscan"}>Create New Scan</Link>
          </PrimaryButton>
        </StyledPage>
      )
    case "/newchapter":
      return (
        <StyledPage>
          <PrimaryButton onClick={() => false}>
            <Link href={"/account/newchapter"}>Create New Chapter</Link>
          </PrimaryButton>
        </StyledPage>
      )
  }
}

const StyledPage = styled(Box)(`
    width: 200px;
    font-size: 12px;
    border: 1px solid #f00;
    border-left: none;
    padding: 10px;
`)

import { styled } from "@mui/system"

export default function PageHeader({ children }) {
  return <StyledPageHeader>{children}</StyledPageHeader>
}

const StyledPageHeader = styled("h2")(`
    font-family: Silkscreen, cursive;
    font-size: 14px;
    margin-bottom: 10px;
`)

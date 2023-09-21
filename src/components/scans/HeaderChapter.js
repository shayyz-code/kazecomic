import { styled } from "@mui/system"

export default function HeaderChapter() {
  return (
    <HeaderContainer>
      <HeaderTitle>Chapters</HeaderTitle>
    </HeaderContainer>
  )
}

const HeaderContainer = styled("div")(
  ` display: flex;
    padding: 15px 15px 0 14px;
    justify-content: space-between;
    `
)

const HeaderTitle = styled("h1")(
  ({ theme }) =>
    `
    color: ${theme.palette.primary.main};
    font-family: Silkscreen, cursive;
    font-size: 16px;
    `
)

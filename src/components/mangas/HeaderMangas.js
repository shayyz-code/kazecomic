import { styled } from "@mui/system"

export default function HeaderMangas() {
  return <HeaderContainer>Mangas</HeaderContainer>
}

export const HeaderContainer = styled("div")(
  ({ theme }) => `
    background: #000;
    padding: 20px;
    `
)

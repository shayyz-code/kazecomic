import { styled } from "@mui/system"

export default function HeaderScans() {
  return (
    <HeaderContainer>
      <HeaderTitle>Newly Released</HeaderTitle>
    </HeaderContainer>
  )
}

const HeaderContainer = styled("div")(
  ({ theme }) =>
    `
    position: relative;
    width: fit-content;
    height: 40px;
    padding-left: 15px;
    justify-content: space-between;
    background: ${theme.palette.primary.main};
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 10px;
      width: 220px;
      height: 40px;
      background: ${theme.palette.primary.main};
      transform: skewX(-25deg);
      z-index: -1;
    }
    `
)

const HeaderTitle = styled("h1")(
  `
    color: #fff;
    font-family: Silkscreen, cursive;
    font-size: 16px;
    line-height: 40px;
    `
)

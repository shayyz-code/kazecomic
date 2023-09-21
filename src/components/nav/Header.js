import { Badge, badgeClasses } from "@mui/base"
import { Box, styled } from "@mui/system"

export default function HeaderNav() {
  return (
    <HeaderContainer>
      <HeaderTitle style={{ marginRight: "20px" }}>Edoscans</HeaderTitle>
      <MailBoxBadge badgeContent={0} showZero>
        <BadgeContent />
      </MailBoxBadge>
    </HeaderContainer>
  )
}

const HeaderContainer = styled("div")(
  ` display: flex;
    padding: 15px;
    justify-content: space-between;
    `
)

export const HeaderTitle = styled("h1")(
  ({ theme }) =>
    `
    color: ${theme.palette.primary.main};
    font-family: Silkscreen, cursive;
    font-size: 28px;
    `
)

function BadgeContent() {
  return (
    <Box
      component="span"
      sx={{
        width: 30,
        height: 30,
        background: (theme) =>
          theme.palette.mode === "dark" ? grey[400] : grey[300],
        display: "inline-block",
        verticalAlign: "middle",
      }}
    />
  )
}

const blue = {
  500: "#007FFF",
}

const grey = {
  300: "#afb8c1",
  400: "#bdbdbd",
  900: "#24292f",
}

const MailBoxBadge = styled(Badge)(
  ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  position: relative;
  display: inline-block;
  border: 1px solid ${theme.palette.primary.main};
  line-height: 1;

  & .${badgeClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 16px;
    height: 16px;
    padding: 0 6px;
    color: ${theme.palette.mode === "dark" ? "#000" : "#FFF"};
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    white-space: nowrap;
    text-align: center;
    background: ${theme.palette.primary.main};
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  `
)

import { styled } from "@mui/system"

export default function Navbar({ data, activePage, setActivePage }) {
  return (
    <StyledNavBar>
      <StyledUl>
        {data.map((item) => (
          <StyledLi
            key={item.icon}
            sx={
              activePage === item.url && {
                background: "transparent",
                borderRight: "none",
              }
            }
            onClick={() => setActivePage(item.url)}
          >
            {item.icon}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNavBar>
  )
}

const StyledNavBar = styled("nav")(`

`)

const StyledUl = styled("ul")(`
    list-style: none;
`)

const StyledLi = styled("li")(`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background: #f00;
    border: 1px solid #f00;
    cursor: pointer;
`)

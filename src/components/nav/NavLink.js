import { Box, styled } from "@mui/system"
import Link from "next/link"

export default function NavLink({ link }) {
  return (
    <Link href={link.href}>
      <Grid>
        <Box
          sx={{
            gridArea: "favicon",
            color: "primary.main",
            textAlign: "center",
            typography: "favicon",
            margin: "auto",
          }}
        >
          {link.symbol}
        </Box>
        <Box sx={{ gridArea: "title" }}>{link.name}</Box>
        <Box sx={{ gridArea: "subtitle" }}>{link.description}</Box>
        <Box sx={{ gridArea: "totalnumber", textAlign: "center" }}>
          {link.totalnumber}
        </Box>
      </Grid>
    </Link>
  )
}

const Grid = styled(Box)(`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  gap: 1;
  grid-template-rows: auto;
  grid-template-areas:
    "favicon title title totalnumber"
    "favicon subtitle subtitle totalnumber";
  overflow: hidden;
  margin-bottom: 10px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 80px;
    width: 300px;
    background: rgb(255,0,0);
    background: linear-gradient(270deg, rgba(255,0,0,1) 0%, rgba(40,6,6,0.3) 100%);
    filter: blur(15px);
    transform: translateX(300px);
    transition: all 0.4s;
    z-index: 0;
  }
  
  &:hover {
    &:before {
      transform: translateX(40px);
    }
  }


`)

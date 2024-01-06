import { styled } from "@mui/system"

export default function PrimaryButton({ onClick, children }) {
  return <StyledPrimaryButton onClick={onClick}>{children}</StyledPrimaryButton>
}

const StyledPrimaryButton = styled("button")(
  ({ theme }) => `
    position: relative;
    width: fit-content;
    height: 24px;
    padding: 2px 0 0 25px;
    z-index: 1;
    font-size: 9px;
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

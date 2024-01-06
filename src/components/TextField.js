import { styled } from "@mui/system"

export default function TextField({
  id = "textField",
  label,
  value,
  setValue,
}) {
  return (
    <div className="textFieldContainer">
      <StyledTextField
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <span>{label}</span>
    </div>
  )
}

const StyledTextField = styled("input")(
  `
    outline: none;
    width: 100%;
    border: 1px solid rgba(255, 0, 0, .25);
    background: transparent;
    color: #f00;
    padding: 10px;
    transition: .5s;
    `
)

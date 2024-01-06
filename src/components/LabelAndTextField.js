import { styled, Box } from "@mui/system"
import TextField from "./TextField"

export default function LabelAndTextField({
  id,
  label,
  placeholder,
  value,
  setValue,
}) {
  return (
    <div className="container">
      <label for={id}>{label}</label>
      <TextField
        id={id}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
      />
    </div>
  )
}

import { useState } from "react"

import { styled, Box } from "@mui/system"

export default function InputFile({ isMultiple = false, label, setPictures }) {
  const [picturePreviews, setPicturePreviews] = useState([])

  const handleInputFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = [...e.target.files]
      setPictures(files)

      const previews = []
      files.forEach((file) => {
        const reader = new FileReader()
        reader.onload = () => {
          previews.push(reader.result)
          if (previews.length === files.length) {
            setPicturePreviews(previews)
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  return (
    <Box>
      <StyledInputFileLabel htmlFor="inputFile">
        <StyledInputFile
          id="inputFile"
          accept="image/*"
          type="file"
          onChange={handleInputFileChange}
          multiple={isMultiple}
        />
        {label}
      </StyledInputFileLabel>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {picturePreviews && picturePreviews.length > 0
          ? picturePreviews.map((picturePreview, index) => (
              // ? pictures.map((picture) => (
              <img
                style={{ width: "50px", height: "auto" }}
                key={index}
                src={picturePreview}
                alt={`Preview ${index}`}
              />
            ))
          : // ))
            ""}
      </Box>
    </Box>
  )
}

const StyledInputFileLabel = styled("label")(`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    font-size: 11px;
    background: #f00;
    border: 1px solid #f00;
    padding: 5px;
    transition: .3s;
    cursor: pointer;

    &:hover {
        background: transparent;
    }
`)

const StyledInputFile = styled("input")(`
    display: none;
`)

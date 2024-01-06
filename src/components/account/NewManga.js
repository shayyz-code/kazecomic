"use client"

import { useState } from "react"

import { Box, styled } from "@mui/system"
import PageHeader from "../PageHeader"
import TextField from "../TextField"
import PrimaryButton from "../PrimaryButton"
import InputFile from "../InputFile"

const list = [
  {
    icon: "S",
    url: "/newscan",
  },
  {
    icon: "C",
    url: "/newchapter",
  },
]

export default function NewManga({ data }) {
  const [name, setName] = useState("")
  const [profile, setProfile] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")
  const [bg, setBg] = useState("")

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minHeight: "200px",
        bgcolor: "#000",
        border: "1px solid #f00",
        boxShadow: "10px 10px #000",
        padding: "15px 20px",
      }}
    >
      <PageHeader>Create New Scan</PageHeader>
      <Box sx={{ border: "1px solid #f00" }}>
        <StyledForm onSubmit={() => alert("Submitted!")}>
          <TextField
            id="inputTextName"
            label="Name:"
            value={name}
            setValue={setName}
          />
          <InputFile setPictures={setProfile} label="Profile" />
          <TextField
            id="inputTextDescription"
            label="Description:"
            value={description}
            setValue={setDescription}
          />
          <TextField
            id="inputTextRating"
            label="Rating:"
            value={rating}
            setValue={setRating}
          />
          <TextField
            id="inputTextBg"
            label="Background:"
            value={bg}
            setValue={setBg}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "20px",
            }}
          >
            <PrimaryButton onClick={() => true}>Create</PrimaryButton>
          </Box>
        </StyledForm>
      </Box>
    </Box>
  )
}

const StyledForm = styled("form")(`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 200px;
    font-size: 12px;
    border: 1px solid #f00;
    border-left: none;
    padding: 10px;
`)

"use client"

import { Box } from "@mui/system"
import { useState } from "react"

import TextField from "../TextField"
import PrimaryButton from "../PrimaryButton"
import PageHeader from "../PageHeader"

export default function Login({ data, setLogged }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showIncorreectInput, setShowIncorrectInput] = useState(false)

  const handleSubmit = () => {
    const checker = data.find((val) => {
      console.log(val)
      return val.name == username && val.pwd == password
    })

    if (checker) {
      setLogged(true)
    } else {
      setShowIncorrectInput(true)
    }
  }

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
      <PageHeader>Login</PageHeader>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "75px",
          justifyContent: "space-between",
        }}
      >
        <TextField
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <TextField
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
      </Box>
      {showIncorreectInput && (
        <Box sx={{ color: "red", fontSize: 9, background: "#000" }}>
          Incorrect username or password!
        </Box>
      )}
      <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
    </Box>
  )
}

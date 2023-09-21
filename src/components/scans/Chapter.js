import { Box } from "@mui/system"

export default function Chapter({ data }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: 300,
        height: 50,
        bgcolor: "primary.main",
        marginBottom: 1,
        cursor: "pointer",
        "&:hover": {
          color: "black",
        },
      }}
    >
      <Box
        sx={{
          width: "content-fit",
          height: 50,
          fontFamily: "Silkscreen, cursive",
          fontSize: 24,
          lineHeight: 2,
          textAlign: "center",
          transition: "0.3s",
          paddingRight: 1,
          paddingLeft: 1,
        }}
      >
        {data.ch_no < 10 ? "0".concat(data.ch_no) : data.ch_no}
      </Box>
      <Box
        sx={{
          fontSize: 14,
          lineHeight: 3.5,
          fontWeight: "bold",
        }}
      >
        {data.name}
      </Box>
    </Box>
  )
}

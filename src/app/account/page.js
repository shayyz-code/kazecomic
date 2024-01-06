import fsPromises from "fs/promises"
import path from "path"

import bg2 from "$/photos/bg2.jpg"

import { Box } from "@mui/system"
import Image from "next/image"

import LogSwitch from "@/components/account/LogSwitch"

async function getData() {
  const filePath = path.join(process.cwd(), "json/accounts.json")

  const jsonData = await fsPromises.readFile(filePath)

  if (!jsonData) throw new Error("Failed to fetch data")

  return jsonData
}

export default async function PageAccount() {
  const jsonData = await getData()
  const data = await JSON.parse(jsonData)

  return (
    <main>
      <Box sx={{ bgcolor: "primary.main" }}>
        <Image src={bg2} layout="intrinsic" alt="Background picture" />
        <LogSwitch data={data} />
      </Box>
    </main>
  )
}

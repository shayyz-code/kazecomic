import fsPromises from "fs/promises"
import path from "path"

import Mangas from "@/components/mangas/Mangas"

async function getData() {
  const filePath = path.join(process.cwd(), "json/data.json")

  const jsonData = await fsPromises.readFile(filePath)

  if (!jsonData) throw new Error("Failed to fetch data")

  return jsonData
}

export default async function PageMangas() {
  const jsonData = await getData()
  const data = await JSON.parse(jsonData)

  return (
    <main>
      <Mangas data={data} />
    </main>
  )
}

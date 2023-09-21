import fsPromises from "fs/promises"
import path from "path"

import MangaSlug from "@/components/mangas/MangaSlug"

async function getData(slug) {
  const filePath = path.join(process.cwd(), "json/data.json")

  const jsonData = await fsPromises.readFile(filePath)

  if (!jsonData) throw new Error("Failed to fetch data")

  const objData = await JSON.parse(jsonData)

  if (!objData) throw new Error("Failed to convert data")
  const slugData = objData.find((item) => {
    return item.id === slug
  })

  if (!slugData) throw new Error("Failed to fetch data slug")

  return JSON.stringify(slugData)
}

export default async function PageMangaSlug({ params }) {
  const jsonData = await getData(parseInt(params.slug))
  const data = await JSON.parse(jsonData)

  return (
    <main>
      <MangaSlug data={data} />
    </main>
  )
}

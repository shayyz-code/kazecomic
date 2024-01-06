// import fsPromises from "fs/promises"
// import path from "path"
"use client"
import Mangas from "@/components/mangas/Mangas"
import UseNextFetchJSON from "@/components/UseNextFetchJSON"
import { useEffect, useState } from "react"

// async function getData() {
//   // const filePath = path.join(process.cwd(), "json/scans.json")

//   // const jsonData = await fsPromises.readFile(filePath)

//   // if (!jsonData) throw new Error("Failed to fetch data")

//   const jsonData = await fetch("/api/getscans")

//   return jsonData
// }

export default function PageScans() {
  const [data, setData] = useState([])
  console.log(data)
  // const data = await UseNextFetchJSON("/api/getscans")

  // const jsonData = await getData()
  // const data = await JSON.parse(jsonData)

  useEffect(() => {
    const fetchData = async () => {
      // const fetchedData = await UseNextFetchJSON("/api/getscans")
      const jsonData = await fetch("/api/getscans", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      })

      const dataPromise = jsonData.json().then((data) => {
        if (data) {
          setData(data["data"])
        }
      })
      // const fetchedData = JSON.parse(jsonData.body)
      // const fetchedData = await JSON.parse(jsonData)
      // const jsondata = await fetch("https://localhost:3000/api/getscans")
      // const fetchedData = await JSON.parse(jsondata)
      // console.log(jsondata, fetchData)
      // setData(fetchedData)
    }
    fetchData()
  }, [])

  return (
    <main>
      <Mangas data={data} />
    </main>
  )
}

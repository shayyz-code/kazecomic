export default async function UseNextFetchJSON(path) {
  try {
    const jsonData = await fetch(path, {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    })

    if (!jsonData) throw new Error("Failed to fetch json data.")

    console.log(data)
    const data = await JSON.parse(jsonData)

    if (!data) throw new Error("Failed to parse json to data.")

    console.log(data)
    return data
  } catch (error) {
    // sdf
    console.log(error)
  }
}

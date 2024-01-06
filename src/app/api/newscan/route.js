import { ref, set } from "firebase/database"

import { v4 as uuidv4 } from "uuid"

import { NextResponse } from "next/server"

import database from "$/firebase"

async function writeScanData(scanId, name, artist, profile, description, bg) {
  const status = await set(ref(database, "scans/" + scanId), {
    name: name,
    artist: artist,
    profile: profile,
    description: description,
    bg: bg,
  })

  return status
}

export async function POST(request) {
  try {
    const { name, artist, profile, description, bg } = await request.json()

    if (!name || !artist || !profile || !description || !bg) {
      throw new Error(`${(name, artist, profile, description, bg)} is missing.`)
    } else {
      const task = await writeScanData(
        uuidv4(),
        name,
        artist,
        profile,
        description,
        bg
      )

      if (task) {
        return NextResponse.json({
          message: "Task completed",
        })
      } else {
        return NextResponse.json({
          message: "Task NOT completed.",
        })
      }
    }
  } catch (error) {
    return NextResponse.error()
  }
}

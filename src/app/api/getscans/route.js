import { ref, get } from "firebase/database"

import { NextResponse } from "next/server"

import database from "$/firebase"

async function readScansData() {
  const snapshot = await get(ref(database, "scans/"))

  if (snapshot.exists()) {
    return snapshot
  }
}

export async function GET() {
  try {
    // console.log(request)
    const task = await readScansData()

    if (task) {
      console.log(task)
      return NextResponse.json({
        message: "Task completed",
        data: [task.val()],
      })
    } else {
      return NextResponse.json({
        message: "Task NOT completed.",
      })
    }
  } catch (error) {
    return NextResponse.error()
  }
}

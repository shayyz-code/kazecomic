"use client"

import { useState } from "react"
import Account from "./Account"
import Login from "./Login"

export default function LogSwitch({ data }) {
  const [logged, setLogged] = useState(true)
  return logged ? <Account /> : <Login data={data} setLogged={setLogged} />
}

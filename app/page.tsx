"use client"
import MyProvider from "@/Context/FirstProvider"
import App from "./App"
export default function Home() {


  return (
    <MyProvider>
      <App/>
    </MyProvider>

  )

}
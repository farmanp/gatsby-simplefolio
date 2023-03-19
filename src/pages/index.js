import React from "react"
import Navbar from "../components/navbar";
import { theme } from "../style/theme";

const IndexPage = () => {
  return (
    <div style={{ backgroundColor: theme.colors.primary }}>
      <Navbar />
      <div style={{ padding: "96px" }}>
        <h1 style={{ color: theme.colors.accent }}>Welcome to my portfolio!</h1>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
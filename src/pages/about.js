import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import Hero from "../components/hero"

function About() {
  return (
  	<div>
			<Navbar />
      <h1>About Me</h1>
        <p>Hello! Ipsum</p>
        <Hero />
    </div>
  );
}

export default About;
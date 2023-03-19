import React from "react"
import { graphql } from "gatsby"
import { theme } from "../style/theme";

const styles = {
	hero: {
		backgroundColor: theme.colors.light,
	}
}

const Hero = () => {
	return (
  	<div style={styles.hero}>
			<h1>Welcome to my portfolio!</h1>
    </div>
  )
}

export default Hero
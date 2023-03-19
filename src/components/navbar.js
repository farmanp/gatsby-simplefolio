import React from "react"
import { Link } from "gatsby"

const body = {
  margin: 0,
  padding: 0,
  fontFamily: 'Roboto, sans-serif',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '1.5',
  backgroundColor: '#fff',
  color: '#232129',
};

const navbarStyles = {
  backgroundColor: "#45ADA8",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
}

const logoStyles = {
  color: "#fff",
  fontSize: 24,
  fontWeight: 600,
  textDecoration: "none",
}

const navLinksStyles = {
  display: "flex",
  justifyContent: "flex-end",
}

const linkStyles = {
  color: "#fff",
  textDecoration: "none",
  fontSize: 16,
  fontWeight: 500,
  padding: "16px",
}

const Navbar = () => {
	return (
		<div style={body}>
			<nav style={navbarStyles}>
			<Link to="/" style={logoStyles}>
				My Portfolio
			</Link>
			<div style={navLinksStyles}>
				<Link to="/about/" style={linkStyles}>
					About
				</Link>
				<Link to="/work/" style={linkStyles}>
					Work
				</Link>
				<Link to="/services/" style={linkStyles}>
					Services
				</Link>
			</div>
		</nav>
	</ div>
  )
}

export default Navbar
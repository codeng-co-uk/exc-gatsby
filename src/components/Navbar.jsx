import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav>
      <h1>
        <span content="C">C</span>
        <span content="o">o</span>
        <span content="d">d</span>
        <span content="e">e</span>
        <span content="n">n</span>
        <span content="g">g</span>
        <span content=".">.</span>
        <span content="c">c</span>
        <span content="o">o</span>
        <span content=".">.</span>
        <span content="u">u</span>
        <span content="k">k</span>
      </h1>
      <div className="links">
        <Link to="/">Home </Link>
       
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar

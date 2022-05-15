import React from "react"
import Layout from "../components/Layout"
import {div}  from "../styles/404.module.css"
const NotFound = () => {
  return (
    <Layout>
      <div className={div} title="404">404</div>
    </Layout>
  )
}

export default NotFound

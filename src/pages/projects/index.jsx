import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import * as styles from "../../styles/projects.module.css"
const Index = () => {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Welcome to my projects page</h2>
        <h3>Projects:</h3>

        <ul>
          <li>
            <Link to="/">project 1</Link>{" "}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Index

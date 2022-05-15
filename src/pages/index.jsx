import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {

  const {title, description} = data.site.siteMetadata;

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Welcome to my Gatsby Homepage</h2>
          <h3>This is my project portfolio</h3>
          <p>designed by Michal Kurzewski</p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
        <p>{title} {description}</p>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

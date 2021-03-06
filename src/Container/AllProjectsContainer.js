import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/Project"

const AllProjectsContainer = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
            techno
            github
            live
          }
          html
        }
      }
    }
  `)

  return (
    <section className="projects section has-background-link-dark">
      <div className="container">
        <h2 className="title is-2 has-text-link-dark">
          Recent Projects
        </h2>
        <div className="columns is-multiline my-5">
          {data.allMarkdownRemark.nodes.map(project => {
            const { title, techno, github, live } = project.frontmatter
            const { html } = project

            return (
              <div
                key={project.id}
                className="column is-one-mobile is-half-tablet is-one-third-desktop"
              >
                <Project
                  title={title}
                  techno={techno}
                  htmlDescription={html}
                  github={github}
                  live={live}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AllProjectsContainer
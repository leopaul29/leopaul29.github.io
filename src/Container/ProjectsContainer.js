import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/Project"

const ProjectsContainer = () => {
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
    <div className="columns">
      <div className="column is-4">
        {data.allMarkdownRemark.nodes.map(project => {
          const { title, techno, github, live } = project.frontmatter
          const { html } = project
          return (
            <Project
              title={title}
              techno={techno}
              htmlDescription={html}
              github={github}
              live={live}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsContainer

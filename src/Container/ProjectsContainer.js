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
    <div class="columns is-multiline  ">
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
  )
}

export default ProjectsContainer

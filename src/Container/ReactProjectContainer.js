import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/Project"

const ReactProjectContainer = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { techno: { regex: "/(ReactJs)/" } } }
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

  function getProjectData(index) {
    const projects = data.allMarkdownRemark.nodes[index]
    const { title, techno, html, github, live } = projects.frontmatter

    return (
      <Project
        title={title}
        techno={techno}
        htmlDescription={html}
        github={github}
        live={live}
      />
    )
  }

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="title is-2 has-text-link-dark">React Projects focus</h2>

        <div className="columns">
          <div className="column is-3">{getProjectData(2)}</div>
          {/* <div className="column is-3">{getProjectData(5)}</div> */}
          <div className="column">
            <h4 className="title is-4">
              Decouverte de react et firebase hosting
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque mollitia maxime modi voluptates harum rerum, est
              tempore odio doloribus ab eum vel reiciendis? At ab consequuntur,
              quia officiis numquam sequi.
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column is-3">{getProjectData(1)}</div>
          <div className="column is-3">{getProjectData(3)}</div>
          <div className="column">
            <h4 className="title is-4">
              Appel d'API externe avec React Application
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque mollitia maxime modi voluptates harum rerum, est
              tempore odio doloribus ab eum vel reiciendis? At ab consequuntur,
              quia officiis numquam sequi.
            </p>
          </div>
        </div>

        <div className="columns">
          {/* <div className="column is-3">{getProjectData(4)}</div> */}
          <div className="column is-3">{getProjectData(0)}</div>
          <div className="column">
            <h4 className="title is-4">
              Utilisation de Reactjs avec Redux, puis avec Gatsby
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque mollitia maxime modi voluptates harum rerum, est
              tempore odio doloribus ab eum vel reiciendis? At ab consequuntur,
              quia officiis numquam sequi.
            </p>
          </div>
        </div>

        {/* <div className="columns is-multiline my-5">
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
        </div> */}
      </div>
    </section>
  )
}

export default ReactProjectContainer

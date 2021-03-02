import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Presentation } from "../components/Presentation"
import CVFRfile from "../../src/content/storage/cv_leopaulmartin_fr_2021.pdf"
import ResumeENfile from "../../src/content/storage/resume_leopaulmartin_en_2021.pdf"
import RirekishoJPfile from "../../src/content/storage/履歴書.pdf"
import ShokumukeirekishoJPfile from "../../src/content/storage/職務経歴書.pdf"

const PresentationContainer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/(profile)/" }) {
        id
        frontmatter {
          title
          subtitle
          avatar {
            childImageSharp {
              fixed(width: 500) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        html
      }
    }
  `)

  const { frontmatter, html } = data.markdownRemark
  const { title, avatar, subtitle } = frontmatter
  const { fixed } = avatar.childImageSharp

  return (
    <Presentation
      title={title}
      subtitle={subtitle}
      htmlDescription={html}
      avatar={fixed.src}
      CVFRfile={CVFRfile}
      ResumeENfile={ResumeENfile}
      RirekishoJPfile={RirekishoJPfile}
      ShokumukeirekishoJPfile={ShokumukeirekishoJPfile}
    />
  )
}

export default PresentationContainer

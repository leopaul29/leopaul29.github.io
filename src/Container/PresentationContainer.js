import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Presentation } from "../components/Presentation"
import downloadCVFile from "../../src/content/CV_leopaulMARTIN_en.pdf"

const PresentationContainer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/(profile)/" }) {
        id
        excerpt
        frontmatter {
          heading
          picture {
            childImageSharp {
              fixed(width: 500) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const { frontmatter, excerpt } = data.markdownRemark
  const { heading, picture } = frontmatter
  const { fixed } = picture.childImageSharp

  return (
    <div>
      <Presentation
        heading={heading}
        htmlDescription={excerpt}
        profileImageSource={fixed.src}
        downloadCVFile={downloadCVFile}
      />
    </div>
  )
}

export default PresentationContainer
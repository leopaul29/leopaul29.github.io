import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Presentation } from "../components/Presentation"
import downloadCVFile from "../../src/content/CV_leopaulMARTIN_en_2020-12_for_download.pdf"

const PresentationContainer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/(profile)/" }) {
        id
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
        html
      }
    }
  `)

  const { frontmatter, html } = data.markdownRemark
  const { heading, picture } = frontmatter
  const { fixed } = picture.childImageSharp

  return (
    <Presentation
      heading={heading}
      htmlDescription={html}
      profileImageSource={fixed.src}
      downloadCVFile={downloadCVFile}
    />
  )
}

export default PresentationContainer

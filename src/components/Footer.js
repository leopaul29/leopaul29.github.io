import React from "react"

export default function Footer() {
  return (
    <footer className="is-flex is-justify-content-center my-5">
      <div className="content">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> and{" "}
        <a href="https://bulma.io">
          <img
            src="https://bulma.io/images/made-with-bulma.png"
            alt="Made with Bulma"
            width="128"
            height="24"
          />
        </a>
      </div>
    </footer>
  )
}

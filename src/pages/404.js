import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const arrowLeftIcon = (
  <span class="icon mr-3 is-large ">
    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
  </span>
)
const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <section className="hero is-danger is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">404: Not Found</h1>
          <p className="subtitle">
            You just hit a route that doesn&#39;t exist... the sadness.
          </p>
          <Link to="/">
            <button className="button is-info is-rounded">
              {arrowLeftIcon}Go back to the homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  </>
)

export default NotFoundPage

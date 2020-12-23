import React from "react"

export default function GithubStats() {
  return (
    <section className="section has-background-info is-gradient is-rounded">
      <div className="container">
        <h2 className="title is-2 has-text-white has-text-right-desktop">
          My Github Stats
          <span role="img" aria-label="emoji">
            ✨
          </span>{" "}
        </h2>
        <div className="tile is-ancestor my-5">
          <div className="tile is-half is-vertical is-parent">
            <div className="tile is-child">
              <a
                href="https://github.com/anuraghazra/github-readme-stats"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="450"
                  src="https://github-readme-stats.vercel.app/api?username=leopaul29&hide=contribs,issues&show_icons=true"
                  alt="Github stats"
                />
              </a>
            </div>
            <div className="tile is-child">
              <a
                href="https://github.com/anuraghazra/github-readme-stats"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="350"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=leopaul29&layout=compact&hide=C#"
                  alt="Top Langs"
                />
              </a>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <figure>
                <embed src="https://wakatime.com/share/@0ec9f97c-0e0c-4300-b2db-01899b44cb11/527c4b9a-b96f-49ae-9bfb-91b42779cdcf.svg"></embed>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

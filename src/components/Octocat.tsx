import React from 'react'

type OctocatProps = {
  name: string
  number: string
  link: string
  artistLink: string
}

export function Octocat(props: OctocatProps) {
  return (
    <div className="OctoArticle">
      <a className="OctocatImageLink" href={props.link}>
        <img
          className="OctoImage"
          src="https://octodex.github.com//images/Terracottocat_Single.png"
          width="290"
          height="290"
          alt="Terracottocat"
        />
      </a>

      <div className="ArtistNamebox">
        <ul>
          <li id="Name">
            #149:
            <a href="https://octodex.github.com//terracottocat/">
              <strong>Terracottocat</strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/chubbmo">
              <img
                id="Picture"
                src="https://github.com/chubbmo.png"
                width="24px"
                height="24px"
                alt="chubbmo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

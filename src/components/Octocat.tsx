import React from 'react'

type OctocatProps = {
  name: string
  number: string
  link: string
  artistLink: string
  image: string
  artistAvatar: string
  artistName: string
}

export function Octocat(props: OctocatProps) {
  return (
    <div className="OctoArticle">
      <a className="OctocatImageLink" href={props.link}>
        <img className="OctoImage" src={props.image} alt={props.name} />
      </a>

      <div className="ArtistNamebox">
        <ul>
          <li id="Name">
            {props.number}:
            <a href={props.link}>
              <strong>{props.name}</strong>
            </a>
          </li>
          <li>
            <a href={props.artistLink}>
              <img
                id="Picture"
                src={props.artistAvatar}
                width="24px"
                height="24px"
                alt={props.artistName}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

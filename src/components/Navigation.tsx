import React from 'react'

export function NavigationLeft() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img
                id="logo"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="45"
                height="45"
                alt="GithubLogo"
              />
            </a>
          </li>
          <li>
            <a id="title" href="#">
              Octodex
            </a>
          </li>
          <li>
            <a id="home" href="#">
              Home
            </a>
          </li>
          <li>
            <a id="FAQ" href="https://octodex.github.com/faq/">
              FAQ
            </a>
          </li>
          <li>
            <a id="RSS" href="#">
              RSS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

import React from 'react'

export function Header() {
  return (
    <div>
      <header>
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
        <nav>
          <ul>
            <li id="twitter">
              <a href="https://twitter.com/githubdesign">
                <span>Follow us on Twitter</span>
                <img src="twitter.png" width="30" height="30" />
              </a>
            </li>
            <li id="github">
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

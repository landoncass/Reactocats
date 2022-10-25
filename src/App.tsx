import React from 'react'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'

export function App() {
  return (
    <div>
      <Header />
      <Octocat
        name="NUXtocat"
        number="153"
        link="https://octodex.github.com/nuxtocat/"
        image="https://octodex.github.com/images/NUX_Octodex.gif"
        artistLink="https://github.com/cameronfoxly"
        artistAvatar="https://github.com/cameronfoxly.png"
        artistName="Cameron Foxly"
      />
    </div>
  )
}

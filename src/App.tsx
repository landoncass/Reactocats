import React from 'react'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Octocat
          name="NUXtocat"
          number="153"
          link="https://octodex.github.com/nuxtocat/"
          image="https://octodex.github.com/images/NUX_Octodex.gif"
          artistLink="https://github.com/cameronfoxly"
          artistAvatar="https://github.com/cameronfoxly.png"
          artistName="Cameron Foxly"
        />
        <Octocat
          name="Saint Nictocat"
          number="130"
          link="https://octodex.github.com/saint_nictocat/"
          image="https://octodex.github.com/images/saint_nictocat.jpg"
          artistLink="https://github.com/heyhayhay"
          artistAvatar="https://github.com/heyhayhay.png"
          artistName="Haley Carroll"
        />
        <Octocat
          name="Vinyltocat"
          number="135"
          link="https://octodex.github.com/vinyltocat/"
          image="https://octodex.github.com/images/vinyltocat.png"
          artistLink="https://github.com/suziejurado"
          artistAvatar="https://github.com/suziejurado.png"
          artistName="Suzie Jurado"
        />
      </main>
    </div>
  )
}

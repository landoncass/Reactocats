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
        artistLink="https://github.com/cameronfoxly"
      />
      <Octocat />
      <Octocat />
      <Octocat />
      <Octocat />
    </div>
  )
}

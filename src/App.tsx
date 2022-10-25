import React from 'react'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'
import articles from './articles.json'

export function App() {
  const octocatFromData = articles.map((article) => (
    <Octocat
      name={article.name}
      number={article.number}
      link={article.link}
      artistLink={article.artistLink}
      image={article.image}
      artistAvatar={article.artistAvatar}
      artistName={article.artistName}
    />
  ))
  return (
    <div>
      <Header />
      <main>{octocatFromData}</main>
    </div>
  )
}

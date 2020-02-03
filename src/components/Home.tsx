import React, { useContext, lazy, Suspense } from 'react'
import { Store } from '../redux/Store'
const EpisodesList = lazy<any>(() => import('./EpisodesList'))

const Home: React.FC = () => {
  const { state } = useContext(Store)

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <div>Favourite(s): {state.favourites.length}</div>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList />
        </section>
      </Suspense>
    </>
  )
}

export default Home

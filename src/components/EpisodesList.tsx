import React, { useContext, useEffect } from 'react'
import { IEpisode } from '../utils/interfaces'
import { Store } from '../redux/Store'
import { fetchDataAction, toggleFavAction } from '../redux/Actions'

const EpisodesList = (): Array<JSX.Element> => {
  const { state, dispatch } = useContext(Store)
  const { episodes, favourites } = state

  useEffect(() => {
    if (episodes.length === 0)
      fetchDataAction(dispatch)
  })

  const showTextButton = (episode: IEpisode): string => {
    return (
      favourites.find((fav: IEpisode) => fav.id === episode.id)
        ? 'Unfav'
        : 'Fav'
    )
  }

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section>
          <div>Seasion: {episode.season} Number: {episode.number}</div>
          <button
            type='button'
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {showTextButton(episode)}
          </button>
        </section>
      </section>
    )
  })
}

export default EpisodesList

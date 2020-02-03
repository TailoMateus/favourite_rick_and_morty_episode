import { IAction, IEpisode, IState } from '../utils/interfaces'

export const fetchDataAction = async (dispatch: any) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
  const data = await fetch(URL)
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
}

export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode): IAction => {
  const episodeInFav = state.favourites.includes(episode)

  const type = episodeInFav
    ? 'REMOVE_FAV'
    : 'ADD_FAV'
  const payload = episodeInFav
    ? state.favourites.filter((fav: IEpisode) => fav.id !== episode.id)
    : episode

  return dispatch({ type, payload })
}
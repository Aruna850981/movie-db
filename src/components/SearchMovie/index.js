import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import './index.css'

const apiKey = '24335e244c98ffaeeef0ab9aedcf0101'
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

const SearchMovie = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('query')

    if (query) {
      const fetchSearchMovies = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`,
        )
        const data = await response.json()
        setMovies(data.results || [])
      }

      fetchSearchMovies()
    }
  }, [location.search])

  return (
    <div className='toprated-page'>
      <h1 className='top-head'>Search Results</h1>

      <div className='topMovieGrid'>
        {movies.map(movie => (
          <div key={movie.id} className='topMovieCard'>
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className='topMovieimage'
            />
            <p className='movieName'>{movie.title}</p>
            <p className='rating'>{movie.vote_average}</p>
            <button type='button'>View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchMovie

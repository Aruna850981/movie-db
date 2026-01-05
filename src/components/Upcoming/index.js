import {useEffect, useState} from 'react'
import './index.css'

const apiKey = '24335e244c98ffaeeef0ab9aedcf0101'
const getUpcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=`

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

const Upcoming = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const response = await fetch(`${getUpcomingMoviesURL}${page}`)
      const data = await response.json()
      setMovies(data.results || [])
    }

    fetchUpcomingMovies()
  }, [page])

  const onClickNext = () => {
    setPage(prev => prev + 1)
  }

  const onClickPrev = () => {
    if (page > 1) {
      setPage(prev => prev - 1)
    }
  }

  return (
    <div className="up-page">
      <h2 className="up-head">Upcoming</h2>

      <div className="upMovieGrid">
        {movies.map(movie => (
          <div className="upMovieCard" key={movie.id}>
            <img
              className="upMovieimage"
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="upmovieName">{movie.title}</p>
            <p className="uprating">{movie.vote_average}</p>
            <button type="button">View Details</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button type="button" onClick={onClickPrev} disabled={page === 1}>
          Prev
        </button>
        <span className="page-number">{page}</span>
        <button type="button" onClick={onClickNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Upcoming

import {useEffect, useState} from 'react'
import './index.css'

const apiKey = '24335e244c98ffaeeef0ab9aedcf0101'
const getTopRatedMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=`

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

const TopRated = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(`${getTopRatedMoviesURL}${page}`)
        const data = await response.json()
        setMovies(data.results || [])
      } catch (err) {
        console.error('Failed to fetch top rated movies:', err)
        setMovies([])
      }
    }

    fetchTopRatedMovies()
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
    <div className="toprated-page">
      <h1 className="top-head">Top Rated</h1>

      <div className="topMovieGrid">
        {movies.map(movie => (
          <div className="topMovieCard" key={movie.id}>
            <img
              className="topMovieimage"
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="movieName">{movie.title}</p>
            <p className="rating">{movie.vote_average}</p>
            <button type="button">View Details</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button type="button" onClick={onClickPrev} disabled={page === 1}>
          Prev
        </button>

        <p className="page-number">{page}</p>

        <button type="button" onClick={onClickNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default TopRated

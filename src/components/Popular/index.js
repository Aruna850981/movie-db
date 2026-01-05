import {useEffect, useState} from 'react'
import './index.css'

const apiKey = '24335e244c98ffaeeef0ab9aedcf0101'
const getPopularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

const Popular = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch(`${getPopularMoviesURL}${page}`)
      const data = await response.json()
      setMovies(data.results || [])
    }

    fetchPopularMovies()
  }, [page])

  const onClickNext = () => setPage(prev => prev + 1)
  const onClickPrev = () => page > 1 && setPage(prev => prev - 1)

  return (
    <div className="toprated-page">
      <h1 className="top-head">Popular</h1>

      <div className="topMovieGrid">
        {movies.map(movie => (
          <div key={movie.id} className="topMovieCard">
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className="topMovieimage"
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

        <span className="page-number">{page}</span>

        <button type="button" onClick={onClickNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Popular

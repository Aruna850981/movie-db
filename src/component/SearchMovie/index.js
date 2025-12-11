import './index.css'
import {Link, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {FaStar} from 'react-icons/fa'

const SearchMovie = () => {
  const apiKey = '24335e244c98ffaeeef0ab9aedcf0101'
  const location = useLocation()

  const query = new URLSearchParams(location.search).get('query')

  const [result, setResult] = useState([])

  useEffect(() => {
    if (!query) return

    const fetchedData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`,
      )
      const data = await res.json()

      setResult(data.results)
    }
    fetchedData()
  }, [query])

  return (
    <div className="search-page">
      <div className="search-grid">
        {result.map(movie => (
          <div className="search-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p className="rating">
              <FaStar /> {movie.vote_average}
            </p>

            <Link to={`/movie/${movie.id}`}>
              <button type="button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SearchMovie

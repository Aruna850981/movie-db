import './index.css'
import {useState, useEffect} from 'react'
import {FaStar} from 'react-icons/fa'

const TopRated = () => {
  const apiKey = '24335e244c98ffaeeef0ab9aedcf0101'

  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    )
      .then(res => res.json())
      .then(data => {
        console.log('API Response:', data)
        setMovieData(data.results || [])
      })
      .catch(err => console.error('Fetch Error:', err))
  }, [])
  console.log(movieData)

  return (
    <div className="toprated-page">
      <h1 className="top-head">Top Rated Movies</h1>
      <div className="topMovieGrid">
        {movieData.map(item => (
          <div className="topMovieCard" key={item.id}>
            <img
              className="topMovieimage"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <h1 className="movieName">{item.title}</h1>

            <p className="rating">
              <FaStar />
              {item.vote_average}
            </p>
            <button type="button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TopRated

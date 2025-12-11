import './index.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

const Upcoming = () => {
  const apiKey = '24335e244c98ffaeeef0ab9aedcf0101'

  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    )
      .then(res => res.json())
      .then(data => {
        setMovieData(data.results)
      })
  }, [])
  console.log(movieData)

  return (
    <div className="up-page">
      <h1 className="up-head">Upcoming Movies</h1>
      <div className="upMovieGrid">
        {movieData.map(item => (
          <div className="upMovieCard" key={item.id}>
            <img
              className="upMovieimage"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <h1 className="upmovieName">{item.title}</h1>

            <p className="uprating">
              <FaStar />
              {item.vote_average}
            </p>
            <Link to={`/movie/${item.id}`}>
              <button type="button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Upcoming

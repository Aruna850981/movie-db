import './index.css'
import {useState, useEffect} from 'react'
import {FaStar} from 'react-icons/fa'

const Popular = () => {
  const apiKey = '24335e244c98ffaeeef0ab9aedcf0101'

  const [moviesData, setMoviesData] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    )
      .then(res => res.json())
      .then(data => {
        setMoviesData(data.results)
        console.log(data)
      })
  }, [])
  console.log(moviesData)

  return (
    <div className="moviePage">
      <h1 className="heading">Popular Movies</h1>
      <div className="movieGrid">
        {moviesData.map(item => (
          <div className="movieCard" key={item.id}>
            <img
              className="image"
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

export default Popular

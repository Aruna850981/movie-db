import './index.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

const UpcomingMovieDetails = () => {
  const apiKey = '24335e244c98ffaeeef0ab9aedcf0101'

  const {id} = useParams()

  const [movie, setmovie] = useState(null)
  const [cast, setcast] = useState([])

  useEffect(() => {
    const moviesDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
      )
      const data = await res.json()
      setmovie(data)
    }

    const castDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`,
      )
      const data = await res.json()
      setcast(data.cast)
    }

    moviesDetails()
    castDetails()
  }, [id])

  console.log('movie:', movie)
  console.log('cast: ', cast)

  if (!movie) {
    return <h2 className="loading">Loading movie details...</h2>
  }

  return (
    <div className="detailsPage">
      <div className="movieSection">
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movieInfo">
          <h1>{movie.title}</h1>
          <p>
            <strong>Rating:</strong> <FaStar />
            {movie.vote_average}
          </p>
          <p>
            <strong>Duration:</strong> {movie.runtime} mins
          </p>
          <p>
            <strong>Genre:</strong> {movie.genres?.map(g => g.name).join(', ')}
          </p>

          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>

          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
      <h2 className="castHeading">Cast</h2>
      <div className="castGrid">
        {cast.map(member => (
          <div key={member.cast_id} className="castCard">
            <img
              className="castImage"
              src={`https://image.tmdb.org/t/p/w300${member.profile_path}`}
              alt={member.original_name}
            />
            <p className="actorName">{member.original_name}</p>
            <p className="characterName">as {member.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default UpcomingMovieDetails

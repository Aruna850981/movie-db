import './index.css'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleSearch = e => {
    e.preventDefault()

    if (input.trim() === '') return

    navigate(`/search?query=${input}`)
    setInput('')
  }

  return (
    <div className="nav-container">
      <Link to="/" className="link">
        <h1 className="title">movieDB</h1>
      </Link>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="search"
          placeholder="Search for a movie..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="nav-buttons">
        <Link to="/">
          <button className="nav-btn" type="button">
            Popular
          </button>
        </Link>
        <Link to="/top-rated">
          <button className="nav-btn" type="button">
            Top Rated
          </button>
        </Link>
        <Link to="/upcoming">
          <button className="nav-btn" type="button">
            Upcoming
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Navbar

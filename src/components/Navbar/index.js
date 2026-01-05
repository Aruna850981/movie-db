import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const Navbar = () => {
  const [input, setInput] = useState('')
  const history = useHistory()

  const onSearch = () => {
    if (input !== '') {
      history.push(`/search?query=${input}`)
    }
  }

  return (
    <div className="navbar">
      <h1>movieDB</h1>

      <div className="nav-buttons">
        <button type="button" onClick={() => history.push('/')}>
          Popular
        </button>

        <button type="button" onClick={() => history.push('/top-rated')}>
          Top Rated
        </button>

        <button type="button" onClick={() => history.push('/upcoming')}>
          Upcoming
        </button>
      </div>

      <div className="search-container">
        <input
          type="search"
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <button type="button" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  )
}

export default Navbar

import './App.css'
import {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Popular from './component/Popular'
import TopRated from './component/TopRated'
import Upcoming from './component/Upcoming'
import UpcomingMovieDetails from './component/UpcomingMovieDetails'
import SearchMovie from './component/SearchMovie'

// write your code here
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:id" element={<UpcomingMovieDetails />} />
          <Route path="/search" element={<SearchMovie />} />
        </Routes>
      </>
    )
  }
}

export default App

import {Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Popular from './components/Popular'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import SearchMovie from './components/SearchMovie'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/search" component={SearchMovie} />
    </Switch>
  </>
)

export default App

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/navigation/Header'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import IODCommunities from './pages/projects/IODCommunities'
import IODEmployee from './pages/projects/IODEmployee'
import IODWebsite from './pages/projects/IODWebsite'
import OSRS from './pages/projects/OSRS'
import Wordle from './pages/projects/Wordle'
import Nextflix from './pages/projects/Nextflix'
import DiscordWeather from './pages/projects/DiscordWeather'
import BeverageFinder from './pages/projects/BeverageFinder'
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, far)

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/beverage-finder" component={BeverageFinder} />
        <Route path="/portfolio/discord-weather" component={DiscordWeather} />
        <Route path="/portfolio/iod-communities" component={IODCommunities} />
        <Route path="/portfolio/iod-employee" component={IODEmployee} />
        <Route path="/portfolio/iod-website" component={IODWebsite} />
        <Route path="/portfolio/nextflix" component={Nextflix} />
        <Route path="/portfolio/osrs-tracker" component={OSRS} />
        <Route path="/portfolio/wordle-clone" component={Wordle} />
      </Switch>
    </div>
  )
}

export default App

import IODWebsite from '../assets/projects/thumbnails/iod-website.svg'
import IODCommunities from '../assets/projects/thumbnails/iod-communities.svg'
import IODEmployees from '../assets/projects/thumbnails/iod-employee.svg'
import Wordle from '../assets/projects/thumbnails/wordle.svg'
import OSRS from '../assets/projects/thumbnails/osrs.svg'
// import test from '../assets/projects/thumbnails/test.jpg'
import Nextflix from '../assets/projects/thumbnails/nextflix.svg'
import BevFinder from '../assets/projects/thumbnails/beverage-finder.svg'
import DiscWeather from '../assets/projects/thumbnails/discord-weather.svg'


export const projectData = [
  {
    "id": 1,
    "name": <>InsideOut Development<br />Website</>,
    "thumbnail": IODWebsite,
    "description": "The marketing website for InsideOut Development.",
    "languages": "MySQL, Express, React, Node, Sass",
    "link": 'iod-website',
    "isPersonal": false
  },
  {
    "id": 2,
    "name": <>InsideOut Development<br />Communities</>,
    "thumbnail": IODCommunities,
    "description": "The hub for where Insideout Development hosts their various products.",
    "languages": "MySQL, Express, React, Node, Sass",
    "link": 'iod-communities',
    "isPersonal": false
  },
  {
    "id": 3,
    "name": <>InsideOut Development<br />Employee Portal</>,
    "thumbnail": IODEmployees,
    "description": "Employee portal for InsideOut Development. Where employees can access resources and complete a weekly employee satisfaction survey.",
    "languages": "MySQL, Express, React, Node, Sass",
    "link": 'iod-employee',
    "isPersonal": false
  },
  {
    "id": 4,
    "name": "Nextflix",
    "thumbnail": Nextflix,
    "description": 'A "clone" I created of NYT Wordle. I added some extra features and allow for unlimited play everyday.',
    "languages": "Next, Hasura, Magic Link, GraphQL, Youtube API",
    "link": 'nextflix',
    "isPersonal": true
  },
  {
    "id": 5,
    "name": "Wordle Clone",
    "thumbnail": Wordle,
    "description": 'A "clone" I created of NYT Wordle. I added some extra features and allow for unlimited play everyday.',
    "languages": "MySQL, Node, Express, React, Typescript, Sass",
    "link": 'wordle-clone',
    "isPersonal": true
  },
  {
    "id": 6,
    "name": "Discord Weatherbot",
    "thumbnail": DiscWeather,
    "description": 'A Node app that interacts with Discord to give you the current weather based on entered parameters.',
    "languages": "Node, Discord",
    "link": 'discord-weather',
    "isPersonal": true
  },
  {
    "id": 7,
    "name": "Beverage Finder",
    "thumbnail": BevFinder,
    "description": 'A Next app that allows you to let the browser use your location and finds coffee shops or breweries nearby.',
    "languages": "Next, Foursquare API, Unsplash API, Geolocation API, Airtable",
    "link": 'beverage-finder',
    "isPersonal": true
  },
  {
    "id": 8,
    "name": "Old-school Runescape Tracker",
    "thumbnail": OSRS,
    "description": "Track quests and a characters levels/highscores from Old-school Runescape in this python/react app.",
    "languages": "Python, React, Typescript, Sass",
    "link": 'osrs-tracker',
    "isPersonal": true
  }
]

import testThumb from './../assets/projects/test.jpg'
import IODWebsite from '../assets/projects/iod-website.svg'
import IODCommunities from '../assets/projects/iod-communities.svg'
import IODEmployees from '../assets/projects/iod-employee.svg'
import Wordle from '../assets/projects/wordle.svg'
import OSRS from '../assets/projects/osrs.svg'

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
    "name": "Wordle Clone",
    "thumbnail": Wordle,
    "description": 'A "clone" I created of NYT Wordle. I added some extra features and allow for unlimited play everyday.',
    "languages": "MySQL, Node, Express, React, Typescript, Sass",
    "link": 'wordle-clone',
    "isPersonal": true
  },
  {
    "id": 5,
    "name": "Old-school Runescape Tracker",
    "thumbnail": OSRS,
    "description": "Track quests and a characters levels/highscores from Old-school Runescape in this python/react app.",
    "languages": "Python, React, Typescript, Sass",
    "link": 'osrs-tracker',
    "isPersonal": true
  }
]

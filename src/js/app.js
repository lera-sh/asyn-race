import GarageLayout from './layout/garageLayout'
import MainLayout from "./layout/mainLayout"
import WinnersLayout from "./layout/winnersLayout"
import { disabledTrue } from './appFuncs/disables'
import renderGarage from './appFuncs/renderGarage'
import renderWinners from './appFuncs/renderWinners'
import "../styles/index.scss"

const mainLayout = new MainLayout()
mainLayout.initialize()

const garageLayout = new GarageLayout()
garageLayout.initialize()

const winnersLayout = new WinnersLayout()
winnersLayout.initialize()


const garageBtn = document.querySelector('.nav-button-garage')
const winnerBtn = document.querySelector('.nav-button-winners')

garageBtn.addEventListener('click', () => mainLayout.garageClick())
winnerBtn.addEventListener('click', () => mainLayout.winnersClick())

disabledTrue(garageBtn)

renderGarage()
renderWinners()
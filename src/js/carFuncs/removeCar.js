import AppManager from '../appManager'
import GarageLayout from '../layout/garageLayout'
import deleteApi from '../carApis/deleteApi'
import deleteWinnerApi from '../winnerApis/deleteWinnerApi'
import renderWinners from '../appFuncs/renderWinners'
import { getWinner } from '../api'

const appManager = new AppManager()
const garageLayout = new GarageLayout()

export default async function removeCar(block, id, garage) {
  if(Object.keys(await getWinner(id)).length) {
    await deleteWinnerApi(id)
    renderWinners()
  }

  await deleteApi(id)
  block.remove()
  garage.renderState(await appManager.updateState(garage.pageNumber))  
  await garageLayout.setGarageTitle()
}
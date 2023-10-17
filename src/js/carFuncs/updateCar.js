import AppManager from "../appManager"
import classlistManager from "../appFuncs/classlistManager"
import { disabledTrue } from "../appFuncs/disables"
import resetValues from "../appFuncs/resetValues"
import updateApi from "../carApis/updateApi"
import renderWinners from "../appFuncs/renderWinners"

const appManager = new AppManager()

export default async function updateCar(name, color, button, garage, page, carBlock) {
    await updateApi(name, color, garage.getCurrentCarId())
    garage.renderState(await appManager.updateState(garage.pageNumber))
    renderWinners()

    classlistManager(carBlock, 'remove', 'border-block')
    classlistManager(page, 'remove', 'disabled')
  
    disabledTrue(name, color, button)
    resetValues(name, color)
}
import AppManager from "../appManager"
import Car from "../car"
import GarageLayout from "../layout/garageLayout"
import { newCarID } from "../api"
import { setCreateName, setCreateColor } from "../appFuncs/carVariables"
import resetValues from "../appFuncs/resetValues"

const appManager = new AppManager()
const garageLayout = new GarageLayout()

export default async function createCar(carName, carColor, garage) {
    const name = setCreateName(carName)
    const color = setCreateColor(carColor)
    const id = await newCarID()

    if(name) {
        const car = new Car(id, name, color, garage)
        car.createCar()
        await appManager.getCarsAmount()
        await garageLayout.setGarageTitle()
    }

    garage.renderState(await appManager.updateState(garage.pageNumber))
    resetValues(carName, carColor)
}
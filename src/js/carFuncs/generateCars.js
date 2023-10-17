import AppManager from "../appManager"
import Car from "../car"
import GarageLayout from "../layout/garageLayout"
import { randomName, randomColor } from "../appFuncs/carVariables"
import { newCarID } from "../api"

const appManager = new AppManager()
const garageLayout = new GarageLayout()

export default async function generateCars(garage) {
    let n = 0

    while(n < 100) {
        const name = randomName()
        const color = randomColor()
        const id = await newCarID()
        const car = new Car(id, name, color, garage)
        car.createCar()
        n++
    }

    await garageLayout.setGarageTitle()
    garage.renderState(await appManager.updateState(garage.pageNumber))
}
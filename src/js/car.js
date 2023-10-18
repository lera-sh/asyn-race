import createApi from "./carApis/createApi"
import createCarBlock from "./layout/createCarBlock"

export default class Car {
  constructor(id, carName, carColor, garage) {
    this.id = id
    this.carName = carName
    this.carColor = carColor
    this.garage = garage
    this.page = document.querySelector('.page')
    this.createBlockCar()
  }

  createBlockCar() {
    createCarBlock(this.page, this.carName, this.carColor, this.id, this.garage)
  }

  createCar() {
    createApi(this.carName, this.carColor)
  }
}
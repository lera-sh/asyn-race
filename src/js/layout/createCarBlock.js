import Engine from '../engine'
import { disabledFalse, disabledTrue } from '../appFuncs/disables'
import { appendSVG, appendSvgFlag } from '../appFuncs/svg'
import createElement from '../appFuncs/creatingFunction'
import removeCar from '../carFuncs/removeCar'
import selectCar from '../carFuncs/selectCar'
import stopEng from '../carFuncs/stopEng'

const engine = new Engine()

export default function createCarBlock(page, carName, carColor, carId, garage) {
    const carBlock = createElement("div", { class: "car-block" })
  
    const carButonBlock = createElement("div", { class: "car-block-button" })
    const carButtonA = createElement("button", {class: "car-block-buttonA"}, "A")
    const carButtonB = createElement("button", { class: "car-block-buttonB", disabled: true }, "B")
  
    const carImgBlock = createElement("div", { class: "car-block-img" })
    const animationCarBlock = createElement("div", { class: "animation-block" })
  
    const buttonSelect = createElement("button", { class: "button-select" }, "select")
    const buttonRemove = createElement("button", { class: "button-remove" }, "remove")
  
    const carNameBlock = createElement("p", { class: "name-car" }, carName)
    const svgCar = createElement("div", { class: "svg-car" }, appendSVG(carColor))
    const flagSvg = createElement("div", { class: "flag-block" }, appendSvgFlag())
  
    carButonBlock.appendChild(buttonSelect)
    carButonBlock.appendChild(buttonRemove)
    carButonBlock.appendChild(carNameBlock)
  
    carBlock.appendChild(carButonBlock)
    carBlock.appendChild(carImgBlock)
  
    carImgBlock.appendChild(carButtonA)
    carImgBlock.appendChild(carButtonB)
    carImgBlock.appendChild(animationCarBlock)
    animationCarBlock.appendChild(svgCar)
    animationCarBlock.appendChild(flagSvg)
  
    page.appendChild(carBlock)
  
    buttonRemove.addEventListener("click", () => {
        removeCar(carBlock, carId, garage)
    })
  
    buttonSelect.addEventListener("click", () => {
        selectCar(page, carBlock, carName, carColor)
        garage.setCurrentCarId(carId)
    })

    const buttonRace = document.querySelector('.button-menu-race')
    const buttonReset = document.querySelector('.button-menu-reset')
  
    carButtonA.addEventListener("click", () => {
        engine.startEngine(carId, svgCar, buttonRace, buttonReset)
  
        disabledFalse(carButtonB)
        disabledTrue(carButtonA)
    })
  
    carButtonB.addEventListener("click", () => {
        stopEng(carId, svgCar, buttonReset, engine)

        disabledFalse(carButtonA)
        disabledTrue(carButtonB)
    })
}
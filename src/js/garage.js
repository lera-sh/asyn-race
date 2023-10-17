import AppManager from "./appManager"
import Car from "./car"
import createCar from "./carFuncs/createCar"
import generateCars from "./carFuncs/generateCars"
import updateCar from "./carFuncs/updateCar"
import raceAll from "./carFuncs/raceCars"
import resetAll from "./carFuncs/resetCars" 
import clearState from "./carFuncs/clearState"
import { nextPage, prevPage, pagesButtons } from "./appFuncs/pagesButtons"

const appManager = new AppManager()

export default class Garage {
    constructor(state) {
        this.state = state
        this.pageNumber = 1
        this.carId
        this.renderState(this.state)

        this.page = document.querySelector('.page')
        this.carBlock = document.querySelector('.car-block')
        this.nameCreate = document.querySelector('.name-car-create')
        this.colorCreate = document.querySelector('.color-car-create')
        this.nameUpdate = document.querySelector('.name-car-update')
        this.colorUpdate = document.querySelector('.color-car-update')
        this.btnCreate = document.querySelector('.button-create')
        this.btnUpdate = document.querySelector('.button-update')
        this.btnGenerate = document.querySelector('.button-menu-generate')
        this.btnRace = document.querySelector('.button-menu-race')
        this.btnReset = document.querySelector('.button-menu-reset')

        this.btnCreate.addEventListener('click', () => {
            createCar(this.nameCreate, this.colorCreate, this)
        })

        this.btnGenerate.addEventListener('click', () => {
            generateCars(this)
        })

        this.btnUpdate.addEventListener('click', () => {
            this.nameUpdate.value ? this.updateCar() : alert('Enter car name!')
        })

        this.btnRace.addEventListener('click', () => {
            raceAll(this.btnRace)
        })

        this.btnReset.addEventListener('click', async () => {
            resetAll(this.btnRace, this.btnReset)
            this.renderState(await appManager.updateState(this.pageNumber))
        })

        this.pagesButtons()
    }

    renderState(state) {
        clearState()
        state.forEach((el) => {
            new Car(el.id, el.name, el.color, this)
        })
        
        appManager.setGaragePages(this)
    }

    updateCar() {
        updateCar(this.nameUpdate, this.colorUpdate, this.btnUpdate, this, this.page, this.carBlock)
    }

    async nextPage() {
        nextPage(this)
    }

    async prevPage() {
        prevPage(this)
    }

    pagesButtons() {
        pagesButtons(this.nextPage.bind(this), this.prevPage.bind(this))
    }

    getCurrentCarId() {
        return this.carId
    }

    setCurrentCarId(id) {
        this.carId = id
    }
}

import AppManager from "../appManager"
import createElement from '../appFuncs/creatingFunction'

const appManager = new AppManager()

export default class GarageLayout {
  commonStructure() {
    const garageSection = createElement('div', { class: 'garage-section' })
    const menu = createElement('div', { class: 'menu' })

    garageSection.appendChild(menu)
    document.body.appendChild(garageSection)
  }

  inputCreate() {
    const menu = document.querySelector('.menu')
    const inputCreate = createElement('div', { class: 'input-create' })
    const nameCarCreateInput = createElement('input', { class: 'name-car-create', type: 'text', value: 'Mercedes-Benz' })
    const colorCarCreateInput = createElement('input', { class: 'color-car-create', type: 'color', value: '#ffffff' })
    const createButton = createElement('button', { class: 'button-create' }, 'create')

    inputCreate.appendChild(nameCarCreateInput)
    inputCreate.appendChild(colorCarCreateInput)
    inputCreate.appendChild(createButton)

    menu.appendChild(inputCreate)
  }

  inputUpdate() {
    const menu = document.querySelector('.menu')
    const inputUpdate = createElement('div', { class: 'input-update' })
    const nameCarUpdateInput = createElement('input', { class: 'name-car-update', type: 'text', disabled: true })
    const colorCarUpdateInput = createElement('input', { class: 'color-car-update', type: 'color', value: '#ffffff', disabled: true })
    const updateButton = createElement('button', { class: 'button-update', disabled: true }, 'update')

    inputUpdate.appendChild(nameCarUpdateInput)
    inputUpdate.appendChild(colorCarUpdateInput)
    inputUpdate.appendChild(updateButton)

    menu.appendChild(inputUpdate)
  }

  garageButtons() {
    const menu = document.querySelector('.menu')
    const commonButtons = createElement('div', { class: 'common-buttons' })

    const buttonRace = createElement('button', { class: 'button-menu-race button' }, 'race')
    const buttonReset = createElement('button', { class: 'button-menu-reset button', disabled: true }, 'reset')
    const buttonGenerate = createElement('button', { class: 'button-menu-generate button' }, 'generate cars')

    commonButtons.appendChild(buttonRace)
    commonButtons.appendChild(buttonReset)
    commonButtons.appendChild(buttonGenerate)

    menu.appendChild(commonButtons)
  }

  garage() {
    const garageSection = document.querySelector('.garage-section')
    const garage = createElement('div', { class: 'garage' })

    const garageTitle = createElement('h2', { class: 'garage-title' })
    const pageTitle = createElement('h3', { class: 'page-title' })
    const page = createElement('div', { class: 'page' })
    const pagesNav = createElement('div', { class: 'pages-nav' })

    const buttonPrev = createElement('button', { class: 'button-prev button' }, 'prev')
    const buttonNext = createElement('button', { class: 'button-next button' }, 'next')

    pagesNav.appendChild(buttonPrev)
    pagesNav.appendChild(buttonNext)

    garage.appendChild(garageTitle)
    garage.appendChild(pageTitle)
    garage.appendChild(page)
    garage.appendChild(pagesNav)

    garageSection.appendChild(garage)
  }

  async setGarageTitle() {
    const garageTitle = document.querySelector('.garage-title')
    const garageTitleAmount = await appManager.getCarsAmount()
    garageTitle.textContent = `Garage (${garageTitleAmount})`
  }

  async initialize() {
    this.commonStructure()
    this.inputCreate()
    this.inputUpdate()
    this.garageButtons()
    this.garage()
    await this.setGarageTitle()
  }
}
import createElement from '../appFuncs/creatingFunction' 
import { disabledFalse, disabledTrue } from '../appFuncs/disables'

export default class MainLayout {
    addBtns() {
        const navLayout = createElement('nav', { class: 'nav' })
        const garageButton = createElement('button', { class: 'nav-button nav-button-garage' }, 'garage')
        const winnersButton = createElement('button', { class: 'nav-button nav-button-winners' }, 'winners')

        navLayout.appendChild(garageButton)
        navLayout.appendChild(winnersButton)

        document.body.appendChild(navLayout)
    }

    async garageClick() {
        const garageSection = document.querySelector('.garage-section')
        const winnersSection = document.querySelector('.winners-section')
        const garageBtn = document.querySelector('.nav-button-garage')
        const winnerBtn = document.querySelector('.nav-button-winners')

        garageSection.style.display = 'block'
        winnersSection.style.display = 'none'

        disabledFalse(winnerBtn)
        disabledTrue(garageBtn)
    }

    async winnersClick() {
        const garageSection = document.querySelector('.garage-section')
        const winnersSection = document.querySelector('.winners-section')
        const garageBtn = document.querySelector('.nav-button-garage')
        const winnerBtn = document.querySelector('.nav-button-winners')

        garageSection.style.display = 'none'
        winnersSection.style.display = 'block'
        
        disabledFalse(garageBtn)
        disabledTrue(winnerBtn)
    }

    initialize() {
        this.addBtns()
    }
}
import { disabledFalse, disabledTrue } from "../appFuncs/disables"
import renderWinners from "../appFuncs/renderWinners"

export default async function resetAll(btnRace, btnReset) {
    const winnersBtn = document.querySelector('.nav-button-winners')
    const btnsB = document.querySelectorAll('.car-block-buttonB')
    for(let i of btnsB) { i.click() }

    renderWinners()
    disabledFalse(btnRace)
    disabledTrue(btnReset)
    disabledFalse(winnersBtn)
}
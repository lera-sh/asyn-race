import { disabledTrue } from "../appFuncs/disables"

export default function raceAll(btnRace) {
    const winnersBtn = document.querySelector('.nav-button-winners')
    const btnsA = document.querySelectorAll('.car-block-buttonA')
    for(let i of btnsA) { i.click() }
    
    disabledTrue(btnRace)
    disabledTrue(winnersBtn)
}
import { disabledFalse } from "../appFuncs/disables"
import createWinner from "../winnerFuncs/createWinner"

export default async function successfulCar(btnRace, btnReset, winner, app) {
    disabledFalse(btnReset)
    if (app.counter === 0 && btnRace.disabled === true) {
        await createWinner(winner.getWinnerArr())
        app.counter++ 
    }
}
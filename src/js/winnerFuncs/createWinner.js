import createWinnerApi from "../winnerApis/createWinnerApi"
import updateWinnerApi from "../winnerApis/updateWinnerApi"
import { getWinners } from "../api"

export default async function createWinner(winnerArr) {
    const winner = winnerArr[0]
    const winnersList = await getWinners()
    const existingWinner = winnersList.find(w => w.id === winner.id)

    if (existingWinner) {
        updateWinnerApi(winner.id, existingWinner.wins, winner.time)
    } else {
        createWinnerApi(winner.id, 1, winner.time)
    }
}

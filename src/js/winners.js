import WinnerManager from "./winnerManager"
import clearWinners from "./winnerFuncs/clearWinners"
import createWinnerBlock from "./layout/createWinnerBlock"
import winnerObject from "./winnerFuncs/winnerObject"

const winnerManager = new WinnerManager()

export default class Winners {
    constructor(winners) {
        this.winners = winners
        this.table = document.querySelector('.table')
        this.createBlockWinner()
    }

    async createBlockWinner() {
        clearWinners()

        const results = await winnerObject(this)

        results.forEach((result, i) => {
            createWinnerBlock(result, i + 1, this.table)
        })

        await winnerManager.getWinnersAmount()
    }
}
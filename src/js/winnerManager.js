import { getWinnersAmount } from "./api"

export default class WinnerManager {
    constructor() {
        this.winnerArr = []
    }

    async getWinnersAmount() {
        const winnerTitle = document.querySelector('.winner-title')
        const winnersAmount = await getWinnersAmount()
        winnerTitle.textContent = `Winners (${winnersAmount})`
    }

    getWinnerArr() {
        return [...this.winnerArr]
    }

    setWinnerArr(el) {
        this.winnerArr.push(el)
    }

    clearWinnerArr() {
        return this.winnerArr = []
    }
}
import { getCars, getCarsAmount } from "./api"

export default class AppManager {
    async getCarsAmount() {
        const carsAmount = await getCarsAmount()
        return carsAmount
    }

    async getPagesAmount() {
        const carsAmount = await getCarsAmount()
        const pagesAmount = Math.ceil(carsAmount / 7)
        return pagesAmount
    }

    setGaragePages(garage) {
        const pageTitle = document.querySelector('.page-title')
        pageTitle.textContent = `Page #${garage.pageNumber}`
    }

    async updateState(page) {
        const result = await getCars(page)
        return result
    }
}
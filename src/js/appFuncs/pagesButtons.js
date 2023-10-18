import AppManager from "../appManager"

const appManager = new AppManager()

export async function nextPage(garage) {
    const pagesAmount = await appManager.getPagesAmount()
    garage.pageNumber++

    if (garage.pageNumber > pagesAmount) {
        garage.pageNumber = pagesAmount
        alert('Not found page')
    }

    garage.renderState(await appManager.updateState(garage.pageNumber))
}

export async function prevPage(garage) {
    garage.pageNumber--

    if (garage.pageNumber <= 0) {
        garage.pageNumber = 1
        alert('Not found page')
    }

    garage.renderState(await appManager.updateState(garage.pageNumber))
}

export function pagesButtons(nextPage, prevPage) {
    const prevBtn = document.querySelector('.button-prev')
    const nextBtn = document.querySelector('.button-next')

    nextBtn.addEventListener('click', nextPage)
    prevBtn.addEventListener('click', prevPage)
}
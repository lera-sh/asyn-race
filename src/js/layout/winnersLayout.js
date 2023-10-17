import createElement from '../appFuncs/creatingFunction'

export default class WinnersLayout {
  winnersCreate() {
        const winnersSection = createElement('div', { class: 'winners-section', style: 'display: none;' })
        const winnerTitle = createElement('h3', { class: 'winner-title' })
        const pageWinnerTitle = createElement('h2', { class: 'page-winners-title' })
        const table = createElement('table', { class: 'table' })
        const tableHead = createElement('tr', { class: 'table-head' })

        const tableHeadColumns = ['Number', 'Car', 'Name', 'Win', 'Best time(second)']
        tableHeadColumns.forEach(columnText => {
            const th = document.createElement('th')
            th.textContent = columnText
            tableHead.appendChild(th)
        })

        table.appendChild(tableHead)

        winnersSection.appendChild(winnerTitle)
        winnersSection.appendChild(pageWinnerTitle)
        winnersSection.appendChild(table)

        document.body.appendChild(winnersSection)
    }

    initialize() {
        this.winnersCreate()
    }
}
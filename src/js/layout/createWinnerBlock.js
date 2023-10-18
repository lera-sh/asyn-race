import { appendSVG } from "../appFuncs/svg"
import createElement from "../appFuncs/creatingFunction"

export default function createWinnerBlock(obj, index, table) {
    const tr = createElement('tr', { class: 'table-row' })
  
    const tdIndex = createElement('td', { class: 'table-ceil' }, index)
    const tdCar = createElement('td', { class: 'table-ceil' })
    const svgWinner = createElement("div", { class: "svg-car" }, appendSVG(obj.color))

    tdCar.appendChild(svgWinner)
  
    const tdName = createElement('td', { class: 'table-ceil' }, obj.name)
    const tdWins = createElement('td', { class: 'table-ceil' }, obj.wins)
    const tdTime = createElement('td', { class: 'table-ceil' }, obj.time)
  
    tr.appendChild(tdIndex)
    tr.appendChild(tdCar)
    tr.appendChild(tdName)
    tr.appendChild(tdWins)
    tr.appendChild(tdTime)

    table.appendChild(tr)
}
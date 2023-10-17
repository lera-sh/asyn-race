import { getCar } from "../api"

export default async function winnerObject(win) {
    const ids = win.winners.map(obj => obj.id)
    const results = []
  
    for (let i = 0; i < ids.length; i++) {
        const winner = win.winners[i]
        const wins = winner.wins
        const time = winner.time

        const car = await getCar(winner.id)
        const color = car.color
        const name = car.name
  
        results.push({ color, name, wins, time })
    }

    return results
}
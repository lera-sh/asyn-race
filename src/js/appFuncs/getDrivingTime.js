import { startEngine } from "../api"

export default async function getDrivingTime(id) {
    const {velocity, distance} = await startEngine(id)
    const time = Number((distance / velocity / 1000).toFixed(1))
    return time
}
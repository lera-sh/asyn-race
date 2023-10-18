import Garage from "../garage"
import { getCars } from "../api"

export default async function renderGarage() {
    new Garage(await getCars(1))
}
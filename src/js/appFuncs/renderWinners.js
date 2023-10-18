import Winners from '../winners'
import { getWinners } from '../api'

export default async function renderWinners() {
  return new Winners(await getWinners())
}


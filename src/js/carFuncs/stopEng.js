import classlistManager from "../appFuncs/classlistManager"
import { disabledTrue } from "../appFuncs/disables"
import { stopEngine } from "../api"

export default async function stopEng(id, car, btnReset, app) {
    await stopEngine(id)
    classlistManager(car, 'remove', 'start-animation')
    disabledTrue(btnReset)
    app.counter = 0
}
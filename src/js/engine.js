import WinnerManager from "./winnerManager"
import { stopEngine, startDrive } from "./api"
import getDrivingTime from "./appFuncs/getDrivingTime"
import startDriving from "./carFuncs/startDriving"
import successfulCar from "./carFuncs/successfulCar"

const winnerManager = new WinnerManager()

export default class Engine {
    constructor() {
        this.counter = 0
    }

    async startEngine(id, car, btnRace, btnReset) {
        const time = await getDrivingTime(id)
        startDriving(car, time, winnerManager)

        try {
            const { success } = await startDrive(id)
            winnerManager.setWinnerArr({ time, success, id })
            successfulCar(btnRace, btnReset, winnerManager, this)

        } catch(error) {
            car.style.animationPlayState = 'paused'
            await stopEngine(id)
        }
    }
}
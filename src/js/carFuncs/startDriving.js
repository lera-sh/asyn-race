import classlistManager from "../appFuncs/classlistManager"

export default function startDriving(car, time, app) {
    app.clearWinnerArr()
    car.style.cssText = `animation-duration: ${time}s;`
    classlistManager(car, 'add', 'start-animation')
}
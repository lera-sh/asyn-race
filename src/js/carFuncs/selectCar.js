import { disabledFalse } from "../appFuncs/disables"
import classlistManager from "../appFuncs/classlistManager"

export default function selectCar(page, block, carName, carColor) {
  const nameUpdate = document.querySelector('.name-car-update')
  const colorUpdate = document.querySelector('.color-car-update')
  const updateButton = document.querySelector('.button-update')

  classlistManager(block, 'add', 'border-block')
  classlistManager(page, 'add', 'disabled')

  nameUpdate.value = carName
  colorUpdate.value = carColor
  
  disabledFalse(nameUpdate, colorUpdate, updateButton)
}
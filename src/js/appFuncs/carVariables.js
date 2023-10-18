const firstNames = ["McLaren", "KIA", "Mercedes-Benz", "Lexus", "Toyota", "Audi", "Porsche", "BMW", "Tesla", "Ford", "Mazda"]
const secondNames = ["F1", "K5", "CLE", "GX", "Camry", "A6", "911", "X6", "Model X", "Mustang", "CX-5"]

export function setCreateName(name) {
    if(name.value.length) {
      return name.value
    }

    alert('Enter car name!')
}

export function setCreateColor(color) {
    return color.value
}

export function randomName() {
    const firstName = firstNames[Math.floor(Math.random()*firstNames.length)]
    const secondName = secondNames[Math.floor(Math.random()*secondNames.length)]
      
    return `${firstName} ${secondName}`
}

export function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
}

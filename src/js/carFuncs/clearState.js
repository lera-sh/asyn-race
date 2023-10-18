export default function clearState() {
    const carBlocks = document.querySelectorAll('.car-block')
    carBlocks.forEach((carBlock) => {
        carBlock.remove()
    })
}
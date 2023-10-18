export function disabledTrue(...arr) {
    return arr.map(i => i.disabled = true)
}

export function disabledFalse(...arr) {
    return arr.map(i => i.disabled = false)
}
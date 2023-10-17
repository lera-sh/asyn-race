export default function classlistManager(el, method, className) {
    const classListMethods = {
        add: 'add',
        remove: 'remove',
        toggle: 'toggle',
        contains: 'contains',
    }

    const classListMethod = classListMethods[method]
    return el.classList[classListMethod](className)
}
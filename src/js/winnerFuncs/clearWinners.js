export default function clearWinners() {
    const rows = document.querySelectorAll('.table-row')
    rows.forEach((row) => row.remove())
}
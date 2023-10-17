export default async function deleteWinnerApi(id) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
        method: "DELETE",
    })

    return response
}
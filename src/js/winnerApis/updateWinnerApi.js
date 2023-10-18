export default async function updateWinnerApi(id, wins, time) {
    const data = {
        wins: wins + 1,
        time: time
    }
    
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
  
    return response
}
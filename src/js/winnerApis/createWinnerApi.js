export default function createWinnerApi(id, wins, time) {
    fetch('http://127.0.0.1:3000/winners', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, wins, time }),
    })
  }
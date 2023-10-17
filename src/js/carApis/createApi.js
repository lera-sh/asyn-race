export default function createApi(name, color) {
  fetch('http://127.0.0.1:3000/garage', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, color }),
  })
}
export default async function updateApi(carName, carColor, id) {
  const data = {
    name: carName.value,
    color: carColor.value
  }
  
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return response
}
export default async function deleteApi(id) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: "DELETE",
  })

  return response
}
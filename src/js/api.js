const serverUrl = 'http://127.0.0.1:3000'

export async function getCar(id) {
  const response = await fetch(`${serverUrl}/garage/${id}`)
  const result = await response.json()
  return result
}

export async function getCars(page) {
  const response = await fetch(`${serverUrl}/garage?_page=${page}&_limit=7`)
  const result = await response.json()
  return result
}

export async function newCarID() {
  const response = await fetch(`${serverUrl}/garage`)
  const result = await response.json()
  return result.length ? result[result.length - 1].id : 1
}

export async function getCarsAmount() {
  const response = await fetch(`${serverUrl}/garage`)
  const result = await response.json()
  return result.length
}

export async function startEngine(id) {
  const url = `${serverUrl}/engine/?id=${id}&status=started`;
  const response = await fetch(url, { method: "PATCH" });
  const result = await response.json();
  return result;
}

export async function stopEngine(id) {
  const url = `${serverUrl}/engine/?id=${id}&status=stopped`;
  const response = await fetch(url, { method: "PATCH" });
  const result = await response.json();
  return result;
}

export async function startDrive(id) {
  const url = `${serverUrl}/engine/?id=${id}&status=drive`;
  const response = await fetch(url, { method: "PATCH" });
  const res = await response.json();
  return res;
}

export async function getWinners() {
  const response = await fetch(`${serverUrl}/winners`)
  const result = await response.json()
  return result
}

export async function getWinner(id) {
  const response = await fetch(`${serverUrl}/winners/${id}`)
  const result = await response.json()
  return result
}

export async function getWinnersAmount() {
  const response = await fetch(`${serverUrl}/winners`)
  const result = await response.json()
  return result.length
}

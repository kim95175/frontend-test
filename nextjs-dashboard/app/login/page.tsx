import axios from "axios";

async function getData() {
  const res = await fetch('http://auto.pyler.ai/api/v1/authorize')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main>
    <h1>Dashboard</h1>
    <p>{data.authorization_url}</p>
  </main>
}
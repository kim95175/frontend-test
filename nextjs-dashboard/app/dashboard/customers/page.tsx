
// async function getData() {
//     const res = await fetch('http://auto.pyler.ai/api/v1/users/{}?user_id=65716e22576478013fbeb8a7')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
//   }
   
//   export default async function Page() {
//     const data = await getData()
   
//     return <main>
//       <h1>Dashboard</h1>
//       <p>{data.email} {data.name}</p>
//     </main>
//   }
"use client"; // This is a client component 👈🏽
import axios from "axios";

// pages/index.tsx
import { useState } from 'react';

const IndexPage = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);

  const getData = async () => {
    try {

    const response = await fetch(`https://auto.pyler.ai/api/v1/users/{}?user_id=${id}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Next.js Data Fetching</h1>
      <label>
        Enter ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <button onClick={getData}>Submit</button>

      {data && (
        <div>
          <h2>Data Received:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default IndexPage;

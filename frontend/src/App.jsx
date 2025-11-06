import { useEffect, useState } from 'react'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts') // проксируется на backend
      .then(res => res.json())
      .then(setPosts)
  }, [])

  return (
    <div>
      <h1>Posts from Supabase</h1>
      <ul>
        {posts.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  )
}
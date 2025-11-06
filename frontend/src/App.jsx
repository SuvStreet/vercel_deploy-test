import { useEffect, useState } from 'react'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://vercel-deploy-test-backend.vercel.app') // проксируется на backend
      .then((res) => res.text())
      .then(setPosts)
  }, [])

  return (
    <div>
      <h1>Posts from Supabase</h1>
      <ul>
        {posts}
      </ul>
    </div>
  )
}

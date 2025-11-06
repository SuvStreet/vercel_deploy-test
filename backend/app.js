const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')

console.log('✅ Backend function initialized');

const app = express()
app.use(cors({ origin: '*', credentials: true }))
app.use(express.json())

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// главный роут
app.get('/', (req, res) => {
  res.send('✅ Backend is alive')
})

// простой эндпоинт
app.get('/posts', async (req, res) => {
  const { data, error } = await supabase.from('posts').select('*')
  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})

app.post('/posts', async (req, res) => {
  const { data, error } = await supabase
    .from('posts')
    .insert([req.body])
    .select()
  if (error) return res.status(400).json({ error: error.message })
  res.json(data[0])
})

module.exports = app

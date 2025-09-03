import express from 'express'
import cors from 'cors'
import taskRoutes from './routes/taskRoutes.js'

const app = express()
const PORT = 3000

app.use(cors({origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE']}))

app.use(express.json())

app.use("/api/tasks",taskRoutes)
app.listen (PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

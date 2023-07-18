import express from 'express'
import helmet from 'helmet'

const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080

app.get('/v1/status', (req, res) => res.status(200).json({ message: 'OK' }))

app.listen(PORT, () => {
    console.log(`Hello ci-cd-github-actions-test-1, I'm running at :${PORT}`)
})

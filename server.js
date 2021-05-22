const express = require('express')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.get('/', (req, res) => res.send('API is Running very well....'))

const PORT = 5000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('API is Running very well....'))

const PORT = 5000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

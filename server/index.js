const express = require('express')
const morgan = require('morgan')

const api = require('./routes/api')
const PORT = process.env.PORT || 3333
const app = express()

const cors = require('cors')
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(morgan('tiny'))
app.use('/api', api)

app.listen(PORT)

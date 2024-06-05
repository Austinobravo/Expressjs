const express = require('express')
import {router} from './router/gunRouter'
const CookieParser = require('cookie-parser');

const app = express()
const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
app.use(express.json())
app.use(express.urlencoded())
app.use(CookieParser()) 
app.use(router)


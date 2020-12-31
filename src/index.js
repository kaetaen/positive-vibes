const app = require('./app')
const cors = require('cors')

const port = process.env.PORT || 8080
app.use(cors())
app.listen(port)

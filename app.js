const { ESRCH } = require('constants')
const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    // if(err) {
    //     res.status = 500
    //     res.end('error loading index.html')
    // }
    
    app.use(express.static('views/'))
    app.use(express.static('node_modules/@fortawesome/fontawesome-free/js/'))
    
    res.statusCode = 200
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)
console.log(`app started on port ${port}`)
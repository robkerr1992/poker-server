const app = require('express')()
const http = require('http').createServer(app);
const port = process.env.PORT || 3001
const io = require('socket.io')(http)

app.get('/api', (req, res) => {
    res.json({
        message: 'Wassup baby'
    })
})

http.listen(port, () => console.log('Joe Byron'))

io.on('connection', (socket) => {
    console.log('new client connected')

    socket.on('disconnect', () => {
        console.log('client disconnected')
    })
})
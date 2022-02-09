const express = require('express')

const port = process.env.PORT || 3001

const app = express()

app.get('/api', (req, res) => {
    res.json({
        message: 'Wassup baby'
    })
})

app.listen(port, () => console.log('Joe Byron'))
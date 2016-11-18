const http = require('http')

var server = http.createServer((req, res) => {
  console.log('Request coming in...')
  res.writeHead(200, {'Content-Type': 'appplication/json'})
  res.end(JSON.stringify({
    hello: Math.random(),
    process: process.env
  }))
})

server.listen(5000, () => { console.log('Server Running') })


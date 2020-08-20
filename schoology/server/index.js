const express = require('express')
const PORT = 3000
const app = express()
const states = require('./states')
app.use(express.static('public'))
app.listen(PORT, () => console.log(`listening on port ${PORT}`))


app.get('/api/states', function (req, res) {
  res.json(states)
})

app.get('/search', function (req, res) {
  let searchTerm = req.query.value
  let results = []
  for(let i = 0; i < states.length; i++){
    let state = states[i]
    if(state.toLowerCase().startsWith(searchTerm.toLowerCase())){
      results.push(state)
    }
  }
  res.json(results)
})

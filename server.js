const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let nickName = {
  'john': {
    'actualName': `John's actual name is mostly likely Jonathan`
  },
  'gio':{
    'actualName': `Gio's actual name is mostly likely Giovanni`
  },
  'tom': {
    'actualName': `Tom's actual name is mostly likely Thomas`
  },
  'tommy': {
    'actualName': `Tommy's actual name is mostly likely Thomas`
  },
  'dylan': {
    'actualName': 'Your new name is Dylan'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/nickname/:shortName', (req, res) => {
  const name = req.params.shortName.toLowerCase()
  console.log(name)
  if(nickName[name]){
    res.json(nickName[name])
  }else{
    res.json(nickName['dylan'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

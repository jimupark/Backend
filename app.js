const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')); //정적 파일 폴더 설정 

// app.get('/hi', (req, res) => {
//   res.send('Hello World!!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
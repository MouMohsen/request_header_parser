var express = require('express')
var app = express()


app.get('/',function(req,res){
  res.json({
      "IP Address": req.connection.remoteAddress,
      "Language": req.headers["accept-language"].split(",")[0],
      "Operating System": req.headers["user-agent"].match(/\((.*?)\)/)[1]
  });


})


app.listen(process.env.PORT ||3000, function () {
  console.log('Timestamp API is listening on port 3000!')
})

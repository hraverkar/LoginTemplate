const express = require('express');
const app = express();

app.use(express.static(__dirname +'/dist/test'));
app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname + 'dist/test/index.html'));
});
 
console.log("PortOpen");

var http = require('http');
var fs = require('fs');


var server = http.createServer((req, res)=>{
  console.log('req.url', req.url)
  if(req.url === '/'){
    fs.readFile('./public/test.html', (err, data)=>{
      res.end(data);
    })
  }else if(req.url === '/second'){
    res.write('<h1>Second page</h1>')
    res.end(`<h1><a href='/third'>third page</a></h1>`)
  }else if(req.url === '/third'){
    res.end('<h1>Third page</h1>')
  }
}).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion










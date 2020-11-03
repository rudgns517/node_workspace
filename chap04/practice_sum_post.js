var http = require('http');
var url = require('url');
var querystring = require('querystring');

//#region 2. post 방식으로 넘어온 두 값(num1, num2)을 활용하여 두 값 사이의 합계 구하기

var server = http.createServer((req, res)=>{
    console.log('req.url: ', req.url)

    if(req.url === '/favicon.ico'){
       res.end();
       return;
    }

    
}).listen(8080, ()=>console.log('8080포트에서 대기중'))
//#endregion
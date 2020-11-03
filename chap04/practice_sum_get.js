// <연습 문제>두 값(num1, num2)을 활용하여 두 값 사이의 합계 구하기
// localhost:8080/?num1=1&num2=100 => {num1: 1, num2: 100}
var http = require('http');
var url = require('url');
var querystring = require('querystring');

//#region 1. get 방식으로 넘어온 두 값(num1, num2)을 활용하여 두 값 사이의 합계 구하기
var server = http.createServer((req, res)=>{
    console.log('req.url: ', req.url)

    if(req.url === '/favicon.ico'){
       res.end();
       return;
    }

    // 1. url 파싱 => json 객체
    const parsdedURL = url.parse(req.url);
    console.log('파싱된 url: ', parsdedURL);
    // 2. url.query 파싱 => json 객체
    // /?num1=1&num2=100 => {num1 : 1, num2: 100}
    console.log('parsdedURL.query: ', parsdedURL.query);  // num1=1&num2=100
    qs = querystring.parse(parsdedURL.query);
    console.log('파싱된 querystring: ', qs);  //  { num1: '1', num2: '100' }

    // 3. num1, num2를 정수로 변환
    var num1 = parseInt(qs.num1);
    var num2 = parseInt(qs.num2);
    console.log(`num1=${num1}, num2=${num2}`);                                         

    // 4. num1, num2가 정상적으로 존재하면 합계를 구해서 res.end()로 반환
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if(Number.isNaN(num1) || Number.isNaN(num2)){
        res.end('잘못된 숫자가 입력되어 에러가 발생함.')
    }else{
        var sum = 0;
        for(var i=num1; i<=num2; i++)
            sum += i;
        res.end(`${num1} ~ ${num2}의 합계: ${sum}`);                        
    }

}).listen(8080, ()=>console.log('8080포트에서 대기중'))
//#endregion
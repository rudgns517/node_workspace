var print = (count)=> {
    for(var i=0; i<count; i++)
        console.log('Hello world!')
}

obj= {}
obj.add = (a,b)=>a+b;
obj.add(3,4)

sub = (a,b)=>a-b;
obj = sub;
console.log(obj)

module.exports = print;


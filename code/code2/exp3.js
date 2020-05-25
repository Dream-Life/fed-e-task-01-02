const fp = require('lodash/fp')
const {Maybe,Container} = require('./support')
const {log} = console

let safeProp = fp.curry(function(x,o){
    return Maybe.of(o[x])
})
let user = {id:2, name:'Albert'}

//解答
let ex3 = ()=>safeProp('name')(user).map(fp.first)._value
log(ex3())
const fp = require('lodash/fp')
const {Maybe,Container} = require('./support')
const {log} = console

let maybe = Maybe.of([5,6,1])
// 解答
// n是需要增加的值
let ex1 = function(n){
    return maybe.map(fp.map(fp.add(n)))._value
}

log(ex1(2))
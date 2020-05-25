const fp = require('lodash/fp')
const {Maybe,Container} = require('./support')
const {log} = console

// let ex4 = function(n){
//     if(n){return parseInt(n)}
// }
// log(ex4(null)) // undefined
// log(ex4(2)) // 2
// log(ex4('null')) // NaN
// log(ex4('3')) // 3
// log(ex4('dd')) // NaN
// log(ex4(undefined)) // undefined
// log(ex4({a:'sss'})) // NaN

// 解答
let ex4 = n=>{
    return Maybe.of(n).map(parseInt)._value
}

log(ex4(null)) // null
log(ex4(2)) // 2
log(ex4('null')) // NaN
log(ex4('3')) // 3
log(ex4('dd')) // NaN
log(ex4(undefined)) // undefined
log(ex4({a:'sss'})) // NaN
const fp = require('lodash/fp')
const {Maybe,Container} = require('./support')
const {log} = console

let xs = Container.of(['do','ray','me','fa','so','la','ti','do'])

// 解答
let ex2 = ()=> xs.map(fp.first)._value
log(ex2())
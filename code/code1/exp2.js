const fp = require('lodash/fp')
const cars = require('./data')
const {log} = console

// 解答
const firstCarName = fp.flowRight(fp.prop('name'),fp.first)
log(firstCarName(cars))
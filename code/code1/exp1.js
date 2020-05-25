const fp = require('lodash/fp')
const cars = require('./data')
const {log} = console
let isLastInStock = function(cars){
    // 获取最后一条数据
    let last_car = fp.last(cars)
    // 获取最后一条数据的in_stock属性值
    return fp.prop('in_stock',last_car)
}

log(isLastInStock(cars))

// flowRight 解答
const lastInStock = fp.flowRight(fp.prop('in_stock'),fp.last)
log(lastInStock(cars))
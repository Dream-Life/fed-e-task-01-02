const fp = require('lodash/fp')
const cars = require('./data')
const {log} = console

let _average = function(xs){
    return fp.reduce(fp.add,0,xs)/xs.length
}
// <-无须改动

// let averageDollarValue = function (cars){
//     let dollar_values = fp.map(function(car){
//         return car.dollar_value
//     },cars)
//     return _average(dollar_values)
// }

// 解答
const averageDollarValue = fp.flowRight(_average,fp.map(car=>car.dollar_value))

log(averageDollarValue(cars))
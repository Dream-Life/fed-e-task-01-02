const fp = require('lodash/fp')
const cars = require('./data')
const {log} = console

let _underscore = fp.replace(/\W+/g,'_')

// 解答
// const sanitizeNames = fp.map(({name})=>name = fp.flowRight(_underscore,fp.toLower)(name))
const sanitizeNames = fp.map(car=>{
    car.name = fp.flowRight(_underscore,fp.toLower)(car.name)
    return car
})

log(sanitizeNames(cars))
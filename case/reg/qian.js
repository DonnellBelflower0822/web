let price = '123456789'
let priceReg = /(?=(\d{3})+$)/g

console.log(price.replace(priceReg, ',')) // 123456,789

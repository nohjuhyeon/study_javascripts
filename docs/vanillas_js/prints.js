let name = "juhyeon Noh"
// undefined
console.log(name)
// VM789:1 noh juhyeon

let welcome = 'Hello World!'
// undefined
welcome
// 'Hello World!'
console.log(welcome)
// VM600:1 Hello World!
let numbers = 55
// undefined
numbers
// 55

let concats = 'String:' + welcome+', Number : ' + numbers
// undefined
concats
// 'String:Hello World!, Number : 55'
concats = concats + ", Number :" + numbers
// 'String:Hello World!, Number : 55, Number :55'
concats
// 'String:Hello World!, Number : 55, Number :55'
alert(concats)
// undefined

let concats_tilt = `String : ${welcome}, Number : ${numbers}`
// undefined
concats_tilt
// 'String : Hello World!, Number : 55'
console.log(concats_tilt)
// VM1786:1 String : Hello World!, Number : 55
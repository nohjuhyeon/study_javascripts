let name = "juhyeon";
// undefined
console.log(name);
// VM217:1 juhyeon
let welcome = ' Hello world!';
undefined
welcome;
// ' Hello world!'
let numbers = 55;
// undefined
numbers;
// 55
'String:' +welcome;
// 'String: Hello world!'
let concats = "String : " +welcome;
// undefined
concats;
// 'String :  Hello world!'
numbers;
// 55
concats = concats + ", Number:" + numbers;
// 'String :  Hello world!, Number:55'
concats
// 'String :  Hello world!, Number:55
alert(concats);
// undefined
// `` => 문자로 인식하게 해주는 포맷(이름은 titlt)
concats;
// 'String :  Hello world!, Number:55'
`String : ${welcome}, Number: ${numbers}`; // 그냥 쓰면 문자열로 인식, ${}로 감싸주면 변수로 인식(무조건 titlt를 써야지 이 문법을 사용할 수 있음)
// 'String :  Hello world!, Number: 55'
concats;
// 'String :  Hello world!, Number:55'
`String : ${welcome}. Number: ${numbers}`;
// 'String :  Hello world!. Number: 55'
let concats_tilt = `String : ${welcome}, Number: ${numbers}`;
// undefined
concats_tilt;
// 'String :  Hello world!, Number: 55'
console.log(concats_tilt);  // => print를 의미
// VM1211:1 String :  Hello world!, Number: 55
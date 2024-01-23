// if 기본 구문
if (true) {
} else if(true) {
} else {
} // 중괄호가 끝나는 지점에는 ;를 안찍어도 괜찮
let numbers = 10;
if (numbers > 0) {
    console.log("숫자는 양수");
} else if(numbers < 0) {
    console.log("숫자는 음수");
} else {
    console.log(" 0 입니다.");
}
// VM372:2 숫자는 양수
// 삼항 연산자 (Ternary Operation)
if (true) {
} else {
}
result  = (true) ? 'as true' : "as false" ;
// Ternary 예제
result  = (numbers > 0) ? '양수!' : "음수!" ;
// '양수!'
console.log(`숫자는 ${result}`);
// VM537:1 숫자는 양수!
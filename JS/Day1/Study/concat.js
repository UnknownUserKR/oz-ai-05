// 문자열 연산자

let firstName = "John";
let lastName = "Doe";

let msg = "Hello, " + firstName + " " + lastName + "!"; // 문자열 연결
console.log(msg); // Hello, John Doe!

let msg = `Hello, ${firstName} ${lastName}!`; // 템플릿 리터럴
console.log(msg); // Hello, John Doe!

console.log(Number("100") + 10);
console.log(10 + "100");
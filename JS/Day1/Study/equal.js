// 동등 비교

console.log(10 == "10"); // true, 값만 비교
console.log(10 === "10"); // false, 값과 타입 모두 비교

let age = 20;
let hasID = false;

console.log(age >= 20 && hasID); // false, 둘 다 true여야 true
console.log(age >= 20 || hasID); // true, 둘 중 하나만 true여도 true

console.log(!hasID); // true, hasID가 false이므로 !hasID는 true
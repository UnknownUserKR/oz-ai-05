function run(fn) {
    // sayHello Recall
    fn()
}

function sayHello() {
    console.log("Hello World")
}

// run 함수 호출
run(sayHello)

function add(n1, n2) {
    return n1 + n2
}

let result = add(1, 2)

// 특정 콘솔 함수 사용
// document.getElementById("msg")
// h1.textContent

// 1. 브라우저는 HTML을 읽어서 DOM 객체를 만든다
// 2. 브라우저는 JS를 읽어서 실행한다
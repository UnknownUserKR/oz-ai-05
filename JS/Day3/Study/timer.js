// Timer API

// 1) setTImeout : 일정 시간 지난 뒤에 특정 함수를 한번 호출하는 기능

setTimeout(
    () => console.log("3초 경과"),
    3000, // 3000ms = 3s
    24 * 60 * 60 * 1000
)

// 2) setInterval : 일정 시간마다 특정 함수를 반복 실행하는 기능
const timerId = setInterval(
    () => console.log("2초 경과"),
    2000
)
clearInterval(timerId);


let counter = 0
const timerId = setInterval(
    () => {
        if (counter > 3) {
            clearInterval(timerId)
        }
        console.log("2초 경과")
    },
    2000
)
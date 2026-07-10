// FetchAPI

// GET 요청
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) // 읍답 메시지에서 JSON 데이터 추출
    .then(data => console.log(data)) // 콘솔에 출력

// POST 요청
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {"Content-Type": "application/json"}, // 데이터 형식을 명시
    // JSON 문자열로 변환해서 요청 본문에 넣어줌
    body: JSON.stringify({title: "Python", body: "Hello, Python"})
})

    .then(response => response.json())
    .then(data => console.log(data))
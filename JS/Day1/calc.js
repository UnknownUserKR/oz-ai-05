// 계산기 함수 정의
function start() {
    // 계산기 로직 구현
    console.log("Welcome to Calculator");

    // 4칙연산에 대한 계산이 가능할 것
    // 길이가 긴 계산식도 계산이 가능할 것
    // 사칙연산 우선순위(*,/ 가 +,- 보다 먼저 계산됨)가 적용될 것

    // 사용자 입력 처리
    let equation = prompt("계산식을 입력하세요: ");
    console.log("입력된 계산식:", equation);

    //계산 처리 함수 호출
    let result = calculate(equation);
    console.log("Result:", result);
}

// 실제 계산식 처리
function calculate(equation) {
    // 계산식 처리 로직 구현
    // eval() 함수를 사용하여 계산식 평가
    try {
        let result = eval(equation);
        return result;
    } catch (error) {
        console.error("계산 중 오류 발생:", error);
        return "계산식이 올바르지 않습니다.";
    }
}

// 프로그램 시작
start();
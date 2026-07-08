let ispowerOn = false;

function togglePower() {
    ispowerOn = !ispowerOn;
    if (ispowerOn) {
        display.value = '0';
    }
    else {
        display.value = '';
    }
}

function clearDisplay() {
    if (ispowerOn) {
        display.value = '0';
    }
}

function appendNumber(num) {
    if (display.value === '0') {
        display.value = '';
    }
    if (ispowerOn) {
        display.value += num;
    }
}

function appendOperator(operator) {
    if (ispowerOn) {
        display.value += operator;
    }
}

function performCalculate() {
    if (ispowerOn) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
}
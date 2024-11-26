var display = document.getElementById("display");
function appendValue(value) {
    if (display) {
        display.value += value;
    }
}
function clearDisplay() {
    if (display) {
        display.value = "";
    }
}
function operate(operation) {
    if (display) {
        var current = parseFloat(display.value);
        if (isNaN(current)) {
            display.value = "Error";
            return;
        }
        var radians = current * (Math.PI / 180);
        switch (operation) {
            case "sqrt":
                display.value = Math.sqrt(current).toFixed(6);
                break;
            case "pow":
                display.value = Math.pow(current, 2).toFixed(6);
                break;
            case "cos":
                display.value = Math.cos(current).toFixed(6);
                break;
            case "sin":
                display.value = Math.sin(current).toFixed(6);
                break;
            default:
                display.value = "Error";
        }
    }
}
function calculate() {
    if (display) {
        try {
            var expression = display.value;
            var sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, "");
            var result = new Function("\"use strict\"; return (".concat(sanitizedExpression, ")"))();
            if (typeof result === "number" && isFinite(result)) {
                display.value = result.toFixed(0);
            }
            else {
                display.value = "Error";
            }
        }
        catch (error) {
            display.value = "Error";
        }
    }
}

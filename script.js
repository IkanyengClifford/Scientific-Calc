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
/**
 * Perform a specific operation on the current value in the display.
 * @param operation - The operation to perform (e.g., 'sqrt', 'pow').
 */
function operate(operation) {
    if (display) {
        var current = parseFloat(display.value);
        if (isNaN(current)) {
            display.value = "Error";
            return;
        }
        switch (operation) {
            case "sqrt":
                display.value = Math.sqrt(current).toFixed(6);
                break;
            case "pow":
                display.value = Math.pow(current, 2).toFixed(6);
                break;
            default:
                display.value = "Error";
        }
    }
}
/**
 * Calculate the result of the expression in the display.
 */
function calculate() {
    if (display) {
        try {
            var expression = display.value;
            var sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, "");
            var result = new Function("\"use strict\"; return (".concat(sanitizedExpression, ")"))();
            if (typeof result === "number" && isFinite(result)) {
                display.value = result.toFixed(1);
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

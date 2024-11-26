const display = document.getElementById("display") as HTMLInputElement;

function appendValue(value: string): void {
    if (display) {
        display.value += value;
    }
}


function clearDisplay(): void {
    if (display) {
        display.value = "";
    }
}

/**
 * Perform a specific operation on the current value in the display.
 * @param operation - The operation to perform (e.g., 'sqrt', 'pow').
 */
function operate(operation: string): void {
    if (display) {
        const current = parseFloat(display.value);

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
function calculate(): void {
    if (display) {
        try {
            const expression = display.value;
            const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, "");
            const result = new Function(`"use strict"; return (${sanitizedExpression})`)();
            if (typeof result === "number" && isFinite(result)) {
                display.value = result.toFixed(6);
            } else {
                display.value = "Error";
            }
        } catch (error) {
            display.value = "Error";
        }
    }
}

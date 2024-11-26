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


function operate(operation: string): void {
    if (display) {
        const current = parseFloat(display.value);

        if (isNaN(current)) {
            display.value = "Error";
            return;
        }

        const radians = current * (Math.PI / 180);

        switch (operation) {
            case "sqrt":
                display.value = Math.sqrt(current).toString;
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


function calculate(): void {
    if (display) {
        try {
            const expression = display.value;
            const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, "");
            const result = new Function(`"use strict"; return (${sanitizedExpression})`)();
            if (typeof result === "number" && isFinite(result)) {
                display.value = result.toFixed(0);
            } else {
                display.value = "Error";
            }
        } catch (error) {
            display.value = "Error";
        }
    }
}

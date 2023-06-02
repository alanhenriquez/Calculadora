import * as math from 'mathjs';
import * as lodash from 'lodash';

const a = document.querySelector(".expresResult");
const b = document.querySelector(".expresionText");
let compiledExpression = "";

function handleInput() {
    const inputValue = b.value.trim();

    if (inputValue === "") {
        a.innerHTML = "0";
        return;
    }

    try {
        compiledExpression = math.compile(inputValue);
        const resultado = compiledExpression.evaluate();
        a.innerHTML = resultado;
    } catch (error) {
        a.innerHTML = "0";
    }
}

const debouncedHandleInput = lodash.debounce(handleInput, 100);
b.addEventListener("input", debouncedHandleInput);


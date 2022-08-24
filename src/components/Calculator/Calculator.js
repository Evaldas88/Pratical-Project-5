import { useState } from "react";
import "./Calculator.css";

function Calculator() {
    let [calc, setCalc] = useState("");
    let [result, setResult] = useState("");


    const btnValues = ["/", "*", "+", "-", "."];

    const updateCalc = (value) => {
        if (
            (btnValues.includes(value) && calc === '') ||
            (btnValues.includes(value) && btnValues.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc + value)

        if (!btnValues.includes(value)) {
            setResult(eval((calc + value).toString()))
        }
    }

    const calculate = () => {
        setCalc(eval(calc))
    }
    const deleteLast = () => {
        if (calc === '') {
            return
        }
        const value = calc.slice(0, -1)
        setCalc(value)
    }

    const clearCalc = () => {
        if (calc === '') {
            return;
        }

        const newResult = "0";
        setResult(newResult);

        const value = calc.slice(0, '');
        setCalc(value);
    }



    const createDigits = () => {
        const digits = []
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button
                    onClick={() => updateCalc(i.toString())}
                    key={i}
                >
                    {i}
                </button>
            )
        }
        return digits
    }

    return (

        <div className="height-min mt-5">
            <div className='container1'>
                <div className='calculator'>
                    <div className='display'>
                        {result ? <div>{result}</div> : ''}
                        <div>{calc || '0'}</div>
                    </div>
                    <div className='operators'>
                        <button onClick={() => updateCalc('/')} >/</button>
                        <button onClick={() => updateCalc('*')} >*</button>
                        <button onClick={() => updateCalc('+')}>+</button>
                        <button onClick={() => updateCalc('-')}>-</button>
                        <button onClick={deleteLast} >C</button>
                        <button onClick={clearCalc}>CE</button>
                    </div>
                    <div className='digits'>
                        {createDigits()}
                        <button onClick={() => updateCalc('0')}>0</button>
                        <button onClick={() => updateCalc('.')}>.</button>
                        <button onClick={() => calculate()}>=</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Calculator;

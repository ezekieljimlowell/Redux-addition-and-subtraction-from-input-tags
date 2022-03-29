
let saveInputs = (number) => {
    return {
        type: "SAVEINPUTS",
        payload: number
    }
}

let additionResult = (number) => {
    return {
        type: "ADDITIONRESULT",
        payload: number
    }
}

let subtractResult = (number) => {
    return {
        type: "SUBTRACTRESULT",
        payload: number
    }
}

let resetValue = (number) => {
    return {
        type: "RESET",
        payload: number
    }
}

export {saveInputs, additionResult, subtractResult, resetValue}
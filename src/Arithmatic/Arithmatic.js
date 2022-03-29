import React, { useState } from "react";
import { saveInputs, additionResult, subtractResult, resetValue } from '../Redux/actions';
import { useDispatch, useSelector } from "react-redux";

const Arithmatic = () => {
    let dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        input1: "",
        input2: "",
        additionResult: "",
        subtractResult: ""
    })

    const handleChange = (e) => {
        let value = e.target.value;
        setInputs({
            ...inputs,
            [e.target.name]: value
        })
    }

    const add = () => {
        dispatch(saveInputs(inputs));
        dispatch(additionResult(inputs));
    }

    const subtract = () => {
        dispatch(saveInputs(inputs));
        dispatch(subtractResult(inputs));
    }

    const reset = () => {
        setInputs({
            ...inputs,
            input1: "",
            input2: "",
            additionResult: "",
            subtractResult: ""
        })
        dispatch(resetValue(inputs));
    }

    let viewAdd = useSelector((state) => {
        console.log(state)
        return state["additionResult"]
    });

    let viewSubtract = useSelector((state) => {
        console.log(state);
        return state["subtractResult"];
    });

    return (
        <>
            <div>{viewAdd}</div>
            <div>{viewSubtract}</div>
            <input type="text" onChange={handleChange} name="input1" value={inputs.input1}></input>
            <input type="text" onChange={handleChange} name="input2" value={inputs.input2}></input>
            <button type="button" onClick={add}>Add</button>
            <button type="button" onClick={subtract}>Subtract</button>
            <button type="button" onClick={reset}>Reset</button>
        </>
    )
}

{/*const mapStateToProps = (state) => {
    return {
        input1: 100,
        input2: 30
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(add()),
        subtract: () => dispatch(subtract())
    }
}*/}

export default Arithmatic;
import {useState,useEffect} from "react";

function Dummy() {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
      console.log('Use effect');
    },[counter]);
    const onClickHandler = () => {
        setCounter(counter + 1);
    }
    console.log('Render',counter);
    return <button onClick={onClickHandler}>Click to increase: {counter}</button>
}

export default Dummy;
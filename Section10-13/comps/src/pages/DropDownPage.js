import DropDown from "../components/DropDown";
import {useState} from "react";

function DropDownPage(){

    const [selection,isSelection]=useState(null);

    const handleSelect=(option)=>{
        isSelection(option);
    };

    const options= [
        {label:'Red' , value: 'red'},
        {label:'Green' , value: 'green'},
        {label:'Blue' , value: 'blue'},
        {label:'Yellow' , value: 'yellow'},
    ];

    return <DropDown value={selection} options={options} onChange={handleSelect}/>
}

export default DropDownPage;
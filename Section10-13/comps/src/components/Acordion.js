import {useState} from "react";
import {GoChevronDown,GoChevronLeft} from "react-icons/go";

function Acordion({items}){
  const [expendedIndex,setExpendedIndex]=useState(-1);

  const handleClick=(nextIndex)=>{

    setExpendedIndex((currentExpendedIndex)=>{
      if(currentExpendedIndex === nextIndex)
        return -1;
      else
        return nextIndex;
    });
  };

  const renderedItems= items.map((item,index)=>{
   const expended = index===expendedIndex;
   const icon= <span className="text-xl">{expended ? <GoChevronDown/> : <GoChevronLeft/>}</span>;
    return (
        <div key={item.id}>
          <div className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>{item.label}{icon}</div>
          {expended && <div className="border-b p-5">{item.content}</div>}
        </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>
};

export default Acordion;
import {useState, useEffect, useRef} from "react";
import {GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

function DropDown({options, onChange, value}) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handler, true);

        const cleanUp = () => {
            document.removeEventListener('click', handler);
        };
        return cleanUp;
    }, []);
    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)}
                    key={option.value}>{option.label}</div>

    });


    return (<div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer "
               onClick={handleClick}>{value?.label || "Select..."}<GoChevronDown className="text-xl"/></Panel>
        {isOpen && <Panel className="absolute top-fulll">{renderedOptions}</Panel>}
    </div>);
}

export default DropDown;
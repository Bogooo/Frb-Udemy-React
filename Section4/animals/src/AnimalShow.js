import {useState} from "react";
import './AnimalShow.css';
import cat from './img/cat.svg';
import cow from './img/cow.svg';
import dog from './img/dog.svg';
import gator from './img/gator.svg';
import horse from './img/horse.svg';
import bird from './img/bird.svg';
import heart from './img/heart.svg';

const svgMap={
    bird,horse,gator,dog,cow,cat
}
function AnimalShow({type}){
    const [clicks ,setClicks] = useState(0);
    const handleClick=()=>{
        setClicks(clicks+1);
    };

    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" src={svgMap[type]} alt="animal"/>
            <img src={heart} alt="heart"
                 style={{ width:10+10*clicks+'px'}}
                 className="heart"
            />
        </div>
    );
}

export default AnimalShow;
import Button from "./Button";
import {GoBell , GoDatabase} from "react-icons/go";
function App(){
    return (<div>
        <Button success rounded outline><GoBell/>Hi</Button>
        <Button danger outline><GoDatabase/>Bye</Button>
        <Button warning>Hello</Button>
        <Button secondary outline>Good morning</Button>
        <Button primary rounded>Good evening</Button>
        </div>);
}

export default App;
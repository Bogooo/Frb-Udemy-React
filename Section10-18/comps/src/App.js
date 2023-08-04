import Route from "./components/Route";
import AcordianPage from "./pages/AcordianPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
function App(){

return (<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
    <Sidebar/>
    <div className="col-span-5">
        <Route path="/accordion">
            <AcordianPage/>
        </Route>
        <Route path="/dropdown">
            <DropDownPage/>
        </Route>
        <Route path="/buttons">
            <ButtonPage/>
        </Route>
        <Route path="/modal">
            <ModalPage/>
        </Route>
        <Route path="/table">
            <TablePage/>
        </Route>
        <Route path="/counter">
            <CounterPage initialCount={0}/>
        </Route>
    </div>
</div>);
}

export default App;
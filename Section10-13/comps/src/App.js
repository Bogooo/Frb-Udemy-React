import Route from "./components/Route";
import AcordianPage from "./pages/AcordianPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./components/Sidebar";
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
    </div>
</div>);
}

export default App;
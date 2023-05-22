import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import Photos from "./Pages/Photos";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Header />

            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

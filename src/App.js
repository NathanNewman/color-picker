import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import ColorPicker from "./ColorPicker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/colors" />
          </Route>
          <Route exact path="/colors">
            <ColorPicker />
          </Route>
          <Route exact path="/add-color">
            <ColorPicker form="true" />
          </Route>
          <Route exact path="/colors/:color">
            <ColorPicker />
          </Route>
          <Route>
            <h1>404 Error! Page Not Found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import People from "./components/People";
import Planets from "./components/Planets";
import Home from "./components/Home";
import Error from "./components/Error";
import { useHistory } from 'react-router-dom';
function App() {
  
  return (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/people/:id">
          <Home/>
          <People />
        </Route>
        <Route exact path="/planets/:id">
        <Home/>
          <Planets />
        </Route>
        <Route path="/:error">
          <Error/>
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;

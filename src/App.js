import AddUser from "./components/AddUser";
import "./App.css";
import Home from "./components/Home";
import EditUser from "./components/EditUser";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <div className="app">
        <Switch>
          <Route path='/'exact  component={Home} />
          <Route path='/add' component={AddUser} />
          <Route path='/edit/:id' component={EditUser} />
        </Switch>
    </div>
    </>
  );
}

export default App;

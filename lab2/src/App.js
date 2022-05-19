import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Show from "./components/Show";
import Home from "./components/Home";
import { useState } from "react";
import Error from "./components/Error";
function App() {
  const [parentStdList, SetParentStdList] = useState(null);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home SetParentStdList={SetParentStdList} />
        </Route>
        <Route exact path="/students">
          <Home SetParentStdList={SetParentStdList} />
        </Route>
        <Route path="/students/:id">
          <Show parentStdList={parentStdList} />
        </Route>
        <Route path="/Error">
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

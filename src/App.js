import Dashboard from "./components/Dashboard";
import Players from "./components/Players";
import PlayerDetail from "./components/PlayerDetail";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/player/search" component={Players} />
        <Route exact path="/player" component={PlayerDetail} />
        <Route path="/" render={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;

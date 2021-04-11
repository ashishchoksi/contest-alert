import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AllContest from './components/AllContest/AllContest';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path="/upcoming-contest">
            <AllContest />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

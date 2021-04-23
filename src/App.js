import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Posts } from './components/Posts';
import Donation from './components/Donation';
import Subscription  from './components/Subscription';
import Volunteers from './components/Volunteers';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/posts'>
            <Posts/>
          </Route>
          <Route path='/volunteers/create'>
            <Volunteers/>
          </Route>
          <Route path='/donations/create'>
            <Donation/>
          </Route>
          <Route path='/subscribers/create'>
            <Subscription/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

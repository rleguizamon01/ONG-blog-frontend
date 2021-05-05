import { Footer } from './components/Footer';
import Home from './components/Home';
import { Posts } from './components/Posts';
import Donation from './components/Donation';
import Subscription  from './components/Subscription';
import Volunteers from './components/Volunteers';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./components/Post";
import {Container} from "react-bootstrap";
import { AdminPosts } from './components/AdminPosts';
import PostCreate from "./components/PostCreate";
import Protected from "./components/Protected";
import ProtectedAdmin from "./components/ProtectedAdmin";


function App() {
  return (
    <Router>
      <Container fluid>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/posts/:id'>
            <Post/>
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
          <Route path='/admin/posts/create'>
          <Protected Cmp={PostCreate}/>
          </Route>
          <Route path='/admin/posts'>
            <ProtectedAdmin Cmp={AdminPosts}/>
          </Route>
          <Route path='/admin/posts/:id'>
            <ProtectedAdmin Cmp={Post}/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
        </Switch>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;

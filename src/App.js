import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Community from './component/Community/Community';
import NotFound from './component/NotFounnd/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './component/Services/Services';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/community">
            <Community></Community>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>



      {/* <Header></Header>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Community></Community>
      <NotFound></NotFound>
      <Footer></Footer> */}
    </div>
  );
}

export default App;

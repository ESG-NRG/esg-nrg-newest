import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Login from './Components/Login'
// import Account from './Components/Account'
import {Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
  
      <NavBar />
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      {/* <Route exact path="/account" render={(props) => <Account {...props} />} /> */}
    </Switch>

      <Home />
        <p>
    
        </p>
  
    </div>
  );
}

export default App;

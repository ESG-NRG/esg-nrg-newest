import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Profile from './Components/Profile';
import TheContext from './TheContext';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [user, setUser] = useState(null);
  const history = useHistory();
  return (
    <div className="App">
      <TheContext.Provider value={{ history, user, setUser }}>
        <NavBar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/signup" render={(props) => <SignUp />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} />}
          />
        </Switch>
      </TheContext.Provider>
    </div>
  );
}

export default App;

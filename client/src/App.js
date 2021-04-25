import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Profile from './Components/Profile'
import FAQ from './Components/FAQ'
import TheContext from './TheContext'
import LandingPage from './Components/LandingPage'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useState } from 'react';

function App() {
  let [user, setUser] = useState(null);
  const history = useHistory();
  return (
    <div className='App'>
      
        <TheContext.Provider value={{ history, user, setUser }}>
          <NavBar />
          <Switch>
            <Route exact path="/" render={(props) => <LandingPage {...props} />} />
            <Route exact path="/signup" render={(props) => <SignUp />} />
            <Route exact path="/login" render={(props) => <Login {...props} />} />
            <Route exact path="/profile" render={(props) => <Profile {...props} />} />
            <Route exact path="/faq" render={(props) => <FAQ {...props} />} />
          </Switch>
          {/* <FAQ /> */}
          {/* <Footer /> */}
        </TheContext.Provider>
     
    </div>
  );
}

export default App;

// import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Profile from './Components/Profile'
import FAQ from './Components/FAQ'
import AboutUs from './Components/AboutUs'
import ShipCards from './Components/ShipsCard'
import TheContext from './TheContext'
import LandingPage from './Components/LandingPage'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useState } from 'react';


function App() {
  let [user, setUser] = useState(null);
  const history = useHistory();
  return (
    <div id="page-container">
      
        <TheContext.Provider value={{ history, user, setUser }}>
          <div id="content-wrap">
          <Switch >
            <Route exact path="/" render={(props) => <LandingPage {...props} />} />
            <Route exact path="/signup" render={(props) => <SignUp />} />
            <Route exact path="/login" render={(props) => <Login {...props} />} />
            <Route exact path="/profile" render={(props) => <Profile {...props} />} />
            <Route exact path="/faq" render={(props) => <FAQ {...props} />} />
            <Route exact path="/about-us" render={(props) => <AboutUs {...props} />} />
            <Route exact path="/ship-cards" render={(props) => <ShipCards {...props} />} />
            
          </Switch>
          <Footer />
          </div>
          <div id="footerx">
          {/* <Footer /> */}
          </div>
        </TheContext.Provider>
        
     
    </div>
  );
}

export default App;

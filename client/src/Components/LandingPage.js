import React from "react";
import HeroLanding from './HeroLanding'
import AssetsLanding from "./AssetsLanding";
import FocusEngergiesLanding from "./FocusEngergiesLanding";
import MarineOffsetLanding from "./MarineOffsetLanding";
import RebuildingLanding from "./RebuildingLanding";
import NavBar from "./NavBar"
import '../App.css'
import '../index.css'


function LandingPage() {
  return (


        <div>
          <NavBar />
          <HeroLanding />
          <MarineOffsetLanding />
          <RebuildingLanding />
          <FocusEngergiesLanding />
          <AssetsLanding />
        </div>

        

        
  );
}

export default LandingPage;
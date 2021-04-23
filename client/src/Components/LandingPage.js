import React from "react";
import HeroLanding from './HeroLanding'
import AssetsLanding from "./AssetsLanding";
import FocusEngergiesLanding from "./FocusEngergiesLanding";
import MarineOffsetLanding from "./MarineOffsetLanding";
import RebuildingLanding from "./RebuildingLanding";


function LandingPage() {
  return (
        <div>
          <HeroLanding />
          <MarineOffsetLanding />
          <RebuildingLanding />
          <FocusEngergiesLanding />
          <AssetsLanding />
        </div>
  );
}

export default LandingPage;
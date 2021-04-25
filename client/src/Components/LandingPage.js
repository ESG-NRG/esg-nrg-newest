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
<<<<<<< HEAD
          {/* <AssetsLanding /> */}
=======
          <AssetsLanding />
>>>>>>> 646fb0d98c99de039ada09b8366a7b99a8fc7fe6
        </div>
  );
}

export default LandingPage;
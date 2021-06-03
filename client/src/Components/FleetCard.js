import React, {useState} from 'react';
import useScreenSize from "./useScreenSize";
import '../FleetCard.css'
import excalibur from '../images/VesselPlaceholder.png'
import filter from '../images/VesselFilter.png'
import remove from '../images/RemoveIcon.png'

function FleetCard(props) {
    const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);

    return (
        <>
        {screenSize === "xs" || screenSize === "sm" ? (
        <div className='outerFrameM2'>
            <div style={{display:'flex', justifyContent:'space-between', margin:'auto'}} className='flex flex-row'>
                <div>
                    <p className='marineM2'>EXCALIBUR</p> 
                    <p className='headerSub'>Vehicles Carrier</p>  
                </div>
                <br/>
                <div>
                    <p className='marineM2'>IMO</p>
                    <p className='headerSub'>9702455</p>
                </div>
            </div>
            {/* <br/> */}
            <div className='parent'>
                <img className='image1' src={excalibur} alt='Vessel' />
                <img className='image2' src={filter} alt='Filter Option' />
            </div>
            <br/>
            <div>
                <img className='removeIcon' src={remove} alt='Remove Option' />
            </div>
            
<br/><br/><br/><br/><br/>
        </div>
        ) : (
            <div>

            </div>
        )}
       </> 
    );
}

export default FleetCard;
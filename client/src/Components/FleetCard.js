import React, {useState} from 'react';
import useScreenSize from "./useScreenSize";
import '../FleetCard.css'

function FleetCard(props) {
    const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);

    return (
        <>
        {screenSize === "xs" || screenSize === "sm" ? (
        <div className='outerFrameMM'>
            
        </div>
        ) : (
            <div>

            </div>
        )}
       </> 
    );
}

export default FleetCard;
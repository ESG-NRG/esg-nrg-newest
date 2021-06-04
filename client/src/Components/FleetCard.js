import React, {useState} from 'react';
import useScreenSize from "./useScreenSize";
import '../FleetCard.css'
import excalibur from '../images/VesselPlaceholder.png'
import filter from '../images/VesselFilter.png'
import remove from '../images/RemoveIcon.png'
import verticalLine from '../images/verticalLine.png';
import add from '../images/AddPort.png';
import search from '../images/magnifyGlass.png'
import { flex } from 'tailwindcss/defaultTheme';

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
            
            <br/>
            <div style={{ display:'flex', justifyContent: 'space-around'}} className='flex flex-row' >
                {/* LEFT SIDE */}
                <div>
                 <p className='statistics'>
                        Year Built: 
                        <p style={{color: 'black'}}>2015</p>
                    </p>
                <p className='statistics'>
                    GT:
                    <p style={{color: 'black'}}> 75283</p>
                </p>
                <p className='statistics'>
                    DWT:
                    <p style={{color: 'black'}}>23786</p>
                </p>
                <p className='statistics'>
                    LOA:
                    <p style={{color: 'black'}}>200 m</p>
                </p>
                <p className='statistics'>
                    Breadth: 
                    <p style={{color: 'black'}}>37 m</p>
                </p>
                <p className='statistics'> 
                    Draft: 
                    <p style={{color: 'black'}}>37 m</p>
                </p>
                <p className='statistics'> 
                    Origin Port: 
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                     
                </p>
                <div>
                    <input className='inputOption' type='input' search='New York' /> <br/>
                <img id='addIcon' src={add} alt='Add Port Option' />
                </div>

                <br/>
                <p className='statistics'>
                    Fuel SECA
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                        <input className='inputOption' type='input' search='New York' />
                    </div>
                <p className='statistics'>
                    Consumption Rate: 
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                        <input className='inputOption' type='input' search='New York' />
                    </div>
                </div>

                <img className='verticalLine' src={verticalLine} />

                {/* RIGHT SIDE  */}
                <div>
                    <p className='statistics'>
                            Cars: 
                            <p style={{color: 'black'}}>8031</p>
                        </p>
                    <p className='statistics'>
                        Water Ballast:
                        <p style={{color: 'black'}}> 11.429 m3</p>
                    </p>
                    <p className='statistics'>
                        Fuel Oil:
                        <p style={{color: 'black'}}>3.460 m3</p>
                    </p>
                    <p className='statistics'>
                        Marine Disel Oil:
                        <p style={{color: 'black'}}>550 m3</p>
                    </p>
                    <p className='statistics'>
                        Fresh Water: 
                        <p style={{color: 'black'}}>250 m3</p>
                    </p>
                    <p className='statistics'> 
                        Crew: 
                        <p style={{color: 'black'}}>27</p>
                    </p>
                    <p className='statistics'>
                    Destination Port: 
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                    <input className='inputOption' type='input' search='New York' />
                </div>
                <p className='statistics'>
                    Speed
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                    <input className='inputOption' type='input' search='New York' />
                    </div>
                <p className='statistics'>
                    Fuel Non-SECA
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                    <input className='inputOption' type='input' search='New York' />
                    </div>
                <p className='statistics'>
                    Consumption Rate:
                    
                </p>
                    <div>
                    <input className='inputOption' type='input' search='New York' />
                    </div>

                </div>
            </div>
            <button style={{alignItems:'center'}} className="button" onClick>
                CALCULATE VOYAGE 
              </button>
        </div>
        ) : ( 
            <div id='outterFrameD2'> <br/><br/>
          
            <div className='searchBar'>
                    <p className='marineM'>Search Ship Name / IMO</p>
                  <input className='shipSearchD'  placeholder='' value='  Name/IMO' />
                  <img className='magnifyGlassD' src={search} id="search button" />
              </div>

              <br/><br/>
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
            <div className='parentD2'>
                <img className='image1D2' src={excalibur} alt='Vessel' />
                <img className='image2D2' src={filter} alt='Filter Option' />
            </div>
            <br/>
            <div>
                <img className='removeIconD' src={remove} alt='Remove Option' />
            </div>
            
            <br/>
            <div style={{ display:'flex', justifyContent: 'space-around'}} className='flex flex-row' >
                {/* LEFT SIDE */}
                <div>
                 <p className='statistics'>
                        Year Built: 
                        <p style={{color: 'black'}}>2015</p>
                    </p>
                <p className='statistics'>
                    GT:
                    <p style={{color: 'black'}}> 75283</p>
                </p>
                <p className='statistics'>
                    DWT:
                    <p style={{color: 'black'}}>23786</p>
                </p>
                <p className='statistics'>
                    LOA:
                    <p style={{color: 'black'}}>200 m</p>
                </p>
                <p className='statistics'>
                    Breadth: 
                    <p style={{color: 'black'}}>37 m</p>
                </p>
                <p className='statistics'> 
                    Draft: 
                    <p style={{color: 'black'}}>37 m</p>
                </p>
                <p className='statistics'> 
                    Origin Port: 
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                     
                </p>
                <div>
                    <input className='inputOption' type='input' search='New York' /> <br/>
                <img id='addIcon' src={add} alt='Add Port Option' />
                </div>

                <br/>
                <p className='statistics'>
                    Fuel SECA
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                        <input className='inputOption' type='input' search='New York' />
                    </div>
                <p className='statistics'>
                    Consumption Rate: 
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                        <input className='inputOption' type='input' search='New York' />
                    </div>
                </div>

                <img className='verticalLine' src={verticalLine} />

                {/* RIGHT SIDE  */}
                <div>
                    <p className='statistics'>
                            Cars: 
                            <p style={{color: 'black'}}>8031</p>
                        </p>
                    <p className='statistics'>
                        Water Ballast:
                        <p style={{color: 'black'}}> 11.429 m3</p>
                    </p>
                    <p className='statistics'>
                        Fuel Oil:
                        <p style={{color: 'black'}}>3.460 m3</p>
                    </p>
                    <p className='statistics'>
                        Marine Disel Oil:
                        <p style={{color: 'black'}}>550 m3</p>
                    </p>
                    <p className='statistics'>
                        Fresh Water: 
                        <p style={{color: 'black'}}>250 m3</p>
                    </p>
                    <p className='statistics'> 
                        Crew: 
                        <p style={{color: 'black'}}>27</p>
                    </p>
                    <p className='statistics'>
                    Destination Port: 
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                    <input className='inputOption' type='input' search='New York' />
                </div>
                <p className='statistics'>
                    Speed
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                    <input className='inputOption' type='input' search='New York' />
                    </div>
                <p className='statistics'>
                    Fuel Non-SECA
                    <p style={{color: '#FA6521'}}>*</p> <br/>
                </p>
                <div>
                    <input className='inputOption' type='input' search='New York' />
                    </div>
                <p className='statistics'>
                    Consumption Rate:
                    
                </p>
                    <div>
                    <input className='inputOption' type='input' search='New York' />
                    </div>

                </div>
            </div>
            <button className="button" onClick>
                CALCULATE VOYAGE 
              </button>
            </div>
        )}
       </> 
    );
}

export default FleetCard;
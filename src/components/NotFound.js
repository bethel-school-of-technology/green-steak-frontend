import React from 'react'
import steak from '../img/steak.svg'

const Notfound = () => 
    <div>
        <h4 className="App_Name" id="notFound">Page Not Found</h4>
        <img src={steak} alt="Not Found"/>
    </div>

export default Notfound;
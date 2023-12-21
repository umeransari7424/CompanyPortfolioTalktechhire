import React from 'react'
import { Link } from 'react-router-dom'

function Contactheropage() {
  return (
    <div className='contacthero'>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4 contact">
                    <div>
                    <h1 >Contact Us</h1>
                    </div>
                    <div>
                        <ul>
                            <li> <Link to='/'>Home</Link> </li>
                            <li className='contactlist'>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Contactheropage
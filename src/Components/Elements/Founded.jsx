import React from 'react'
import {BsRocketTakeoffFill} from 'react-icons/bs'
import { FaHandshakeSimple } from 'react-icons/fa6';
import {HiEmojiHappy , HiUserGroup} from 'react-icons/hi'


function Founded() {
  return (
    <div className='founded'>
        <div className="container-fluid text-center pt-3">
            <div className="row">
                <div className="card py-5 ">
                    <div className='d-flex justify-content-between foundcard'>
                    <div className='d-flex gap-2 '>
                        <div className='rocket'>
                            <BsRocketTakeoffFill  size={'30px'} className='rocicon'/> 
                        </div>
                        <div>
                            <div className='text-start'>  
                                <h2>2018</h2>
                            </div>
                            <div>
                                <h5>Founded in</h5>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex gap-2 mb-4 '>
                        <div className='rocket'>
                            <FaHandshakeSimple size={'30px'} className='rocicon' /> 
                        </div>
                        <div className='text-start'>
                        <div >  
                                <h2>300+</h2>
                            </div>
                            <div>
                                <h5>Complete Projects</h5>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex gap-2 mb-4'>
                        <div className='rocket'>
                            <HiEmojiHappy  size={'30px'} className='rocicon'/> 
                        </div>
                        <div className='text-start'>
                            <div >  
                            <h2>100</h2>
                            </div>
                            <div>
                                <h5>Happy Clients</h5>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex gap-2 mb-4'>
                        <div className='rocket'>
                            <HiUserGroup  size={'30px'} className='rocicon'/> 
                        </div>
                        <div className='text-start'>
                            <div >  
                                <h2>12</h2>
                            </div>
                            <div>
                                <h5>Talented Developer</h5>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
               
            </div>
        </div>
        
    </div>
  )
}

export default Founded
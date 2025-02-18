import React from 'react'

function Workingprocedure() {
    return (
        <div className='workingprocedure'>
            <div className="container py-5">
                <div className="row text-center pb-5">
                    <div>
                        <span className='working'>Work Process</span>
                    </div>
                    <div>
                        <h2>Our Working Process</h2>
                    </div>
                </div>
                <div className="row text-center py-5">
                    <div className='processline'>
                    <img src="/Assets/process-line.png" alt="processline" className='img-fluid lineimg ' />
                </div>
                    <div className='col-md-4 process-design mb-3 '>
                        <div className="item">
                            <div className="thumb">
                                <img src="/Assets/process-01.jpg" alt="process1" className='process01 ' />
                                {/* <span className='one'>01</span> */}
                            </div>
                            <h4>Design</h4>
                            <p className='w-75 mx-auto mb-0'>Craft visually stunning interfaces that blend your vision with optimal user experience</p>

                        </div>
                    </div>
                    <div className='col-md-4 process-design1 mb-3'>
                        <div className="item">
                            <div className="thumb">
                                <img src="/Assets/process-02.jpg" alt="process1" className='process ' />
                                {/* <span className='one'>02</span> */}
                            </div>
                            <h4 className='pt-3'>Testing</h4>
                            <p className='w-75 mx-auto mb-0'>Rigorously test every aspect for flawless functionality, performance, and security</p>

                        </div>
                    </div>
                    <div className='col-md-4 process-design2 mb-3'>
                        <div className="item">
                            <div className="thumb">
                                <img src="/Assets/process-03.jpg" alt="process1" className='process01 ' />
                                {/* <span className='one'>03</span> */}
                            </div>
                            <h4>Go-Live</h4>
                            <p className='w-75 mx-auto mb-0'>Seamlessly transition from development to a live, monitored environment for a successful launch.</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Workingprocedure
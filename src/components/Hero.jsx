import React from 'react'

const Hero = () => {
  return (
    <>
    <div id="banner" className="banner">
       <div className="row justify-content-center align-items-center px-5 py-5">
        <div className="col-md-6 col-sm-11 mx-auto">
        <h3 className="banner-subtitle">It is a good time for the great taste of burgers</h3>
        <h1 className="banner-title" >Burger <br></br><span>Week</span></h1>
        </div>
        <div className="col-md-6 col-sm-11 mx-auto">
        <img src="./img/1.png" alt="" className="banner-image ml-md-5 " />
        <div className="banner-badge mr-3" >
            <div className="banner-price">50% <span>Off</span></div>
        </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Hero



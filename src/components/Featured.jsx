import React from 'react'

const Featured = () => {
  return (
    <div className="container " id="featured">
    <div className="row">
        <div className="col-md-6 col-sm-11 mx-auto">
            <div  className="banner-grid-big">
                <div className="banner-grid-text">
                    <h4 className="banner-grid-subject">Try it today</h4>
                    <h3 className="banner-grid-title">Most popular banner</h3>
                </div>
                <img src="./img/b1.png" alt="" className="banner-grid-image"/>
            </div>
        </div>
        <div className="banner-grid-column">
            <a href="#" title="" className="banner-grid-small">
                <div className="banner-grid-text">
                    <h4 className="banner-grid-subject">Try it today</h4>
                    <h3 className="banner-grid-title">More fun more taste</h3>
                </div>
                <img src="./img/s1.png" alt="" className="banner-grid-image"/>
            </a>
            <a className="banner-grid-small">
                <div className="banner-grid-text">
                    <h4 className="banner-grid-subject">Try it today</h4>
                    <h3 className="banner-grid-title">Fresh &amp; Chili</h3>
                </div>
                <img src="./img/s2.png" alt="" className="banner-grid-image"/>
            </a>
        </div>
    </div>
</div>
  )
}

export default Featured



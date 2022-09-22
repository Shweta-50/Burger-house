import React from 'react'

const Reservation = () => {
  return (
    <section className="section section-padding " id="reservation">
        <div className="reservation">
            <div className="reservation-left">
                <img src="./img/burger.png" alt=""/>
                <img src="./img/bottle.png" alt=""/>
            </div>
            <div className="reservation-center">
                <div className="section-header text-center">
                    <h5 className="section-label">Reservation</h5>
                    <h2 className="section-title">Book Your Table</h2>
                </div>
                <form className="reservation-form" method="post">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group form_pos">
                                <input type="text" name="name" required="" placeholder="Name" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group form_pos">
                                <input type="email" name="email" required="" placeholder="Email" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group form_pos">
                                <input type="text" name="date" required="" placeholder="Date" className="form-control" id="reserv_date"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group form_pos">
                                <input type="text" name="time" required="" placeholder="Time" className="form-control" id="reserv_time"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group form_pos">
                                <input type="number" name="people" required="" placeholder="People" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <button type="submit" className="button">Find a table</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="reservation-right">
                <img src="./img/burger-food.png" alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Reservation
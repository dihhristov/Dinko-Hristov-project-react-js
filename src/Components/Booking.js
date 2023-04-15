import React from "react";

export const Booking = () => {
    return (

        <section className="section-padding" id="booking">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 mx-auto">
                        <div className="form">

                            <h2 className="text-center mb-lg-3 mb-2">Book an appointment</h2>

                            <form method="post">
                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required />
                                </div>


                                <div className="col-lg-6 col-12 mx-auto">

                                    <input type='date'  date-provide="datepicker"data-date-format="DD-YYYY-MM" className="form-control" required />

                                </div>

                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="time" name="time" id="time" className="form-control" placeholder="Full name" required />
                                </div>

                                <div className="col-12 mx-auto">
                                    <textarea className="form-control" rows="5" id="message" name="message" placeholder="Additional Message"></textarea>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6 mx-auto">
                                    <button type="submit" className="form-control" id="submit-button">Book Now</button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
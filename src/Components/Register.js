import React from "react";

export const Register = () => {
    return (
        <section className="section-padding" id="booking">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 mx-auto">
                        <div className="form">

                            <h2 className="text-center mb-lg-3 mb-2">Register</h2>

                            <form method="post">

                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required />
                                </div>

                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required />
                                </div>

                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                                </div>

                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="telephone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="Phone: 123-456-7890" />
                                </div>

                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                </div>

                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="passeord" name="repass" id="repass" className="form-control" placeholder="Repreat Password" />
                                </div>

                                <div className="col-lg-3 col-md-4 col-6 mx-auto">
                                    <button type="submit" className="form-control" id="submit-button">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
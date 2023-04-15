import React from "react";

export const Login = () => {
    return (
        <section className="section-padding" id="booking">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 mx-auto">
                        <div className="form">

                            <h2 className="text-center mb-lg-3 mb-2">Login</h2>

                            <form method="post">


                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                                </div>

                                <div className="col-lg-6 col-12 mx-auto">
                                    <input type="password" name="password" id="password"  className="form-control" placeholder="Password" />
                                </div>


                                <div className="col-lg-3 col-md-4 col-6 mx-auto">
                                    <button type="submit" className="form-control" id="submit-button">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
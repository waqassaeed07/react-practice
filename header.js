import React, { Component } from 'react';
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";





class Header extends Component {
    render() {
        return (
            <div>

                <div classNameName="container-fluid aad">
                    <div className="row align-items-center">
                        <div className="col-md-1"></div>
                        <div className="col-md-1 ad">
                            <i className="fas fa-language new"></i>
                            <p className="uptext">English</p>
                        </div>
                        <div className="col-md-1">
                            <i className="far fa-money-bill-alt"></i>
                            <p className="uptext">Rupee</p>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-2 ad">
                            <i className="fas fa-user"></i>
                            <p className="uptext"> Admin account</p>
                        </div>
                        <div className="col-md-1">
                            <i className="fas fa-sign-in-alt"></i>
                            <p className="uptext">Register</p>
                        </div>
                        <div className="col-md-2">
                            <i className="far fa-check-square"></i>
                            <p className="uptext">Checkout</p>
                        </div>
                    </div>
                </div>

                {/* <div className="container-fluid aad">
                    <div className="row align-items-center">
                        <div className="col-md-1"></div>
                        <div className="col-md-1 ad">
                            <i className="fas fa-language new"></i>
                            <p className="uptext">English</p>
                        </div>
                        <div className="col-md-1">
                            <i className="far fa-money-bill-alt"></i>
                            <p className="uptext">Rupee</p>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-2 ad">
                            <i className="fas fa-user"></i>
                            <p className="uptext"> Admin account</p>
                        </div>
                        <div className="col-md-1">
                            <i className="fas fa-sign-in-alt"></i>
                            <p className="uptext">Register</p>
                        </div>
                        <div className="col-md-2">
                            <i className="far fa-check-square"></i>
                            <p className="uptext">Checkout</p>
                        </div>
                    </div>
                </div> */}





            </div>
        )
    }
}
export default Header;
import React from 'react'
import './hero.css'


const hero = () => {
    return (
        <div>
            <div className="main-container container">
                
                    <div className="box-1">
                        <div className="hero-content">
                            <h4>#1 the best Glasses</h4>
                            <h1>
                                Heal your eyes <br />
                                Increase your <br />
                                Confidence!
                            </h1>

                            <div className="input-container">
                                <input type="search" name="busqueda" placeholder="Search product to apply" />
                                <button> ico</button>
                            </div>


                        </div>


                        <h3>Choose your face shape</h3>

                    </div>
                    <div className="box-2">
                        <div className="product">
                            <h2>Top Product</h2>

                            <div className="card">
                                <div className="img-card">
                                    <img src="" alt="" />
                                </div>
                                <div className="card-body">
                                    <h6>1. Luminette Pro Glasses</h6>
                                    <p>IDR 2.400.900</p>
                                     <p className="txt-ap">Apply</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="img-card">
                                    <img src="" alt="" />
                                </div>
                                <div className="card-body">
                                    <h6>2. Luminette Glasses</h6>
                                    <p>IDR 2.700.900</p>
                                     <p className="txt-ap">Apply</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="img-card">
                                    <img src="" alt="" />
                                </div>
                                <div className="card-body">
                                    <h6>3. ReTimer Glasses</h6>
                                    <p>IDR 2.200.900</p>
                                     <p className="txt-ap">Apply</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box-3">
                        <button className="btn-hero">
                            Square
                        </button>
                        <button className="btn-hero">
                            Oval
                        </button>

                        <p className="txt-ap">see More</p>
                    </div>
                
            </div>
        </div>
    )
}
export default hero;
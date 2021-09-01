import React from 'react'
import './navbar.css'

 const navbar = () => {
    return (
           <div className="container">
             <nav className="">
                <div className="nav-logo">
                        <h1>Heceop</h1>
                    </div>
                    <div className="nav-items">
                        <ul className="list">
                            <li className="item">For Men</li>
                            <li className="item">For Woman</li>
                            <li className="item">All Prodduct</li>
                            <li className="item">AboutAs</li>
                        </ul>
                    </div>
                        <div className="nav-items-shop">
                            <ul className="list">
                                <li className="item">cart</li>
                                <li className="item">jep</li>
                            </ul>
                        </div>
                    <button className="btn">
                        Btn
                    </button>

             </nav>
           </div>
    )
}

export default navbar;
import React from 'react'
import './navbar.css'
import Menu from '../../assets/ico/menu.png'
import Shop from '../../assets/ico/shop.png'
import Login from '../../assets/ico/login.png'

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
                                <li className="item">cart <span><img src={Shop} alt="" /></span></li>
                                <li className="item">jep <span><img src={Login} alt="" /></span></li>
                            </ul>
                        </div>
                    <button className="btn">
                       <span><img src={Menu} alt="" /></span>
                    </button>

             </nav>
           </div>
    )
}

export default navbar;
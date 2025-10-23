import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

export default () => {
    return (
        <header className="App-header">
            <Link to={"/"} className="logo-area">logoArea</Link>

            <div className="header-items">
                <ul>
                    <li className="menu-item">
                        <span>item list1</span>
                        <ul className="submenu">
                            <li>subItem 1</li>
                            <li>subItem 2</li>
                            <li>subItem 3</li>
                            <li>subItem 4</li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <span>item list2</span>
                        <ul className="submenu">
                            <li>subItem 1</li>
                            <li>subItem 2</li>
                            <li>subItem 3</li>
                            <li>subItem 4</li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <span>item list3</span>
                        <ul className="submenu">
                            <li>subItem 1</li>
                            <li>subItem 2</li>
                            <li>subItem 3</li>
                            <li>subItem 4</li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <span>item list4</span>
                        <ul className="submenu">
                            <li>subItem 1</li>
                            <li>subItem 2</li>
                            <li>subItem 3</li>
                            <li>subItem 4</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="useArea">
                <ul>
                    <li><Link to={"/auth/login"}>login</Link></li>
                    <li>logout</li>
                    <li><Link to={"/auth/signin"}>signin</Link></li>
                    <li>userInfo</li>
                </ul>
            </div>
        </header>
    );
};

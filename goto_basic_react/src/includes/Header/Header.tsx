import React from "react";
import "./Header.css";

export default () => {
    return (
        <header className="App-header">
            {/* 로고 영역 */}
            <div className="logo-area">logoArea</div>

            {/* 메뉴 영역 */}
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

            {/* 사용자 메뉴 영역 */}
            <div className="useArea">
                <ul>
                    <li>login</li>
                    <li>logout</li>
                    <li>signin</li>
                    <li>userInfo</li>
                </ul>
            </div>
        </header>
    );
};

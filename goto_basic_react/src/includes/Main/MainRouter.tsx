import {Route, Routes} from "react-router-dom";
import MainArea from "./MainArea";
import BasicList from "./BasicList";
import BasicImageList from "./BasicImageList";
import Login from "./Login";
import SignIn from "./SignIn";
import React from "react";

export default function () {

    return (
        <Routes>
            <Route path="/" element={<MainArea/>} />
            <Route path="/basic_list" element={<BasicList/>} />
            <Route path="/basic_img_list" element={<BasicImageList/>} />
            <Route path="/auth">
                <Route path="login" element={<Login/>} />
                <Route path="signin" element={<SignIn/>} />
            </Route>
        </Routes>
    )
}

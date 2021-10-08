import React from 'react';
import {Route , BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';

const Router = () => {
    return (
        <BrowserRouter>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        </BrowserRouter>
    )
}

export default Router

import React from "react";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import ShoppingCart from './pages/ShoppingCart';
import ProductView from './pages/ProductView';
import Checkout from './pages/Checkout';
import LoginPage from "./pages/LoginPage";
import Account from "./pages/Account";
import OrderHistory from './pages/OrderHistory';
import Profile from "./pages/Profile";

export const routesConfig = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path:"/about-us",
        element:<AboutUs/>
    },
    {
        path:"/contact-us",
        element: <ContactUs/>

    },
    {
        path: "/portfolio", 
        element:<Portfolio/>
    },
    {
        path:"/project",
        element: <Project/>
    },
    {
        path: "/shopping-cart",
        element:<ShoppingCart/>
    },
    {
        path: "/product-view",
        element: <ProductView/>,
        children:[
            {
                path:":id",
                element:<ProductView/>
            }
        ]
    },
    {
        path:"/checkout",
        element:<Checkout/>
    },
    {
        path:"/login",
        element: <LoginPage/>
    },
    {
        // path:"/account",
        element: <Account/>,
        children:[
            {
                path:"/order-history",
                element: <OrderHistory/>
        
            },
            {
                path:"/profile",
                element: <Profile/>
        
            }
        ]
    },
    

]

//import logo from './logo.svg';
import React from "react";
import './App.css';
import { useRoutes} from "react-router-dom";
import {routesConfig} from './routes';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { UserContextProvider} from "./context/UserContext";
import { CartContextProvider} from "./context/CartContext";

function App() {
  const routes = useRoutes(routesConfig);
  // return routes;
  return (
    <UserContextProvider>
      <CartContextProvider>
      <div className="App">
        <header className='header'>
          <h1> Smart Technology Solutions</h1>
          <p>A <b>responsive</b> website created by me.</p>
        </header>
          <section>
            <Navigation/>
            {routes}
          </section>
          
            <footer>
              <Footer/>
            </footer>
        
      </div>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;

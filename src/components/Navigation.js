import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import ProductCart from './product/ProductCart';
import { UserContext } from '../context/UserContext';
function Navigation(){
   const {authUser,setAuthUser} = useContext(UserContext);
   // Logout updates the user data to default
  const handleLogout = () => {
    setAuthUser((user) => ({
      name: '',
      auth: false,
    }));
  };
        return(
            <div>
                <nav>
                    <ul className='nav-links'>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/contact-us'>Contact Us</Link></li>
                        <li><Link to='/project'>Project</Link></li>
                        <li><ProductCart/></li>
                        <li>
                            {authUser.email && <Link to='/order-history'>{authUser.name}</Link>}
                            {authUser.email && <li className="btn-logout" onClick={handleLogout}>Logout</li>}
                            {!authUser.email && <Link to='/login'>Login</Link>} 
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

export default Navigation;
import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import dashboard from './dashboard.jpg';

function Account() {
  return (
    <div>
        <div><img src={dashboard} className="fakeimg1"  alt="dashboard"/><h1 className='centeredI'>Dashboard</h1></div>

        <div className='row'>
            <div className='col-md-3 '>
             <ul >
                <li className='navBar2'><Link to="/order-history" >Order History</Link></li>
                <li className='navBar2'><Link to="/profile">Profile</Link></li>
            </ul>
            </div>
                <div className='col'>
                <Outlet />
                </div>
        </div>
    </div>
  )
}

export default Account;
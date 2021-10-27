import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Login from '../../Login/login';
export default function login() {
  return (<>
    <h3 className='login'>enter id and password</h3>
    <Login/>
    <Footer />
    </>
  );
}

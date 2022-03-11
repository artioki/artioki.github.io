import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Layout = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <div className='content'>
                    <Outlet/>
        </div>
        

        <Footer/>
        </>
    );
}

export default Layout;

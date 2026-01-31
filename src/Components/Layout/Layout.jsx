import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import StarsBackground from '../BG/StarsBackground';


const Layout = () => {
    return (
        <div className="relative min-h-screen">
            
            <StarsBackground />

           
            <div className="relative z-10">
                <Navbar />
                
                <main>
                    <Banner />
                   
                </main>
            </div>
        </div>
    );
};

export default Layout;
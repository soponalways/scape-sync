import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            {/* Header Section */}
            <header>
                <Navbar />
            </header>
            {/* Main Content Section */}
            <main>
                <Outlet />
            </main>

            {/* Footer Section */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;
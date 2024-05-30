import React from 'react';
import Header from './UI/Header';
import Footer from './UI/Footer';

const LayoutUser = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default LayoutUser;

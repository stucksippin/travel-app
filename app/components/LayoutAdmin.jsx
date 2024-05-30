import React from 'react';
import Header from './UI/Header';

import Footer from './UI/Footer';
import AdminPage from '../Admin/page';

export default function LayoutAdmin({ children }) {
    return (
        <div>
            <Header />
            <main>
                <AdminPage />
            </main>
            <Footer />
        </div>
    );
}

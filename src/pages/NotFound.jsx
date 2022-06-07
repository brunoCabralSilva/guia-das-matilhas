import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="main">
                <Nav />
                <section className="content">
                    Not Found
                </section>
                <Footer />
            </div>
        );
    }
}
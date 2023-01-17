import React from 'react';
// import Nav from '../components/Nav';
// import Construction from '../components/Construction';
// import Footer from '../components/Footer';

export default class Page extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="bg-wolf-01 bg-cover bg-center sm:bg-top relative">
        <div className="relative z-20 h-screen">
          <div className="h-full w-full absolute"></div>
          <div className="main-nav relative z-20">
            {/* <Nav /> */}
          </div>
          <div className="flex items-center justify-center h-full">
            {/* <Construction /> */}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
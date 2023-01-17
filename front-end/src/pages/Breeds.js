import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import fetch from '../fetch';
// import Carousel from '../components/Carousel';
// import Nav from '../components/Nav';
// import Footer from '../components/Footer';

export default class Breeds extends React.Component {
  state = {
    trybeLists: [],
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    const allLists = await axios.get(`${fetch()}/gifts/lists`);
    this.setState({ trybeLists: allLists.data.queryBreeds });
    console.log(allLists.data.queryBreeds)
  }

  render() {
    return (
      <motion.section
        className="bg-wolf-01 bg-cover bg-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        exit={{
          y: -20,
          opacity: 0,
          transition: { duration: 0.5 }
        }}
      >
        <div className="features-div">
          <div className="nav-features">
            {/* <Nav /> */}
          </div>
          <h1 className="text-4xl text-white bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3">
            Raças
          </h1>
          {/* {
            this.state.trybeLists.length> 0 &&
            <Carousel
              list={this.state.trybeLists}
              repository='breeds'
              navigation={true}
              loop={true}
            />
          } */}
        </div>
        <div className="footer-features">
          {/* <Footer /> */}
        </div>
      </motion.section>
    );
  }
}
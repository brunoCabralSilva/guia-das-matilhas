import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, EffectCoverflow } from 'swiper';

export default class Carousel extends React.Component {

  imageReturn = (item) => {
    const { repository } = this.props;
    if (repository === 'trybes') {
      return (<img src={require(`../images/trybes/${item.trybes_image1}`)} alt={item.trybes_name} className="h-80% object-contain" />);
    } else if (repository === "auspices") {
      return (<img src={require(`../images/auspices/${item.auspices_image2}`)} alt={item.auspices_name} className="h-80% object-contain" />);
    } return (<img src={require(`../images/breeds/${item.breeds_image1}`)} alt={item.breeds_name} className="h-80% object-contain" />);
  };

  nameReturn = (item) => {
    const { repository } = this.props;
    if (repository === 'trybes') {
      return item.trybes_name;
    } else if (repository === "auspices") {
      return item.auspices_name;
    } return item.breeds_name;
  }
  
  render() {
    const { list, navigation, loop } = this.props;
    return(
      <Swiper
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 4
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween:1,
        }}}
        loop={loop}
        navigation={navigation}
        modules={[Navigation, EffectCoverflow]}
        className="h-75vh my-3 leading-10 relative"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
      >
        {
          list.map((item, index) => (
            <SwiperSlide key={index} className="h-full blur-sm w-screen p-4 flex flex-col items-center justify-center">
              { this.imageReturn(item) }
              <p className="text-white font-amatic font-bold text-4xl w-full text-center py-2">
                { this.nameReturn(item) }
              </p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    );
  }
}
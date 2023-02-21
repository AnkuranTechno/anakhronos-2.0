import React from "react";
import { technoImg, ankuranLogo } from "../../constants/images";
import "./About.scss";
// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

const About = () => {
  return (
    <div className="app__section about" id="about">
      <div className="app__section-container about-container">
        <h1>About</h1>

        <>
          <Swiper
            style={{
              "--swiper-navigation-size": "2rem",
              "--swiper-navigation-color": "#fff",
            }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
            }}
            speed={800}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swiperslide">
              <div className="content ">
                <img src={technoImg} alt="techno-building" />
                <div className="written-content">
                  <h2>Techno Main SaltLake</h2>
                  <p>
                    Techno Main Salt Lake, was established in the year of 2001.
                    In the test of time, it has stood tall and thrives to be
                    better than what it was yesterday. It is a place where
                    everyone is motivated to be the best versions of themselves
                    and do what they can do their best. A college where everyone
                    believes that practice makes a human perfect, our efforts
                    always pay off and that dreams do come true.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperslide">
              <div className="content">
                <img src={ankuranLogo} alt="ankuran-logo" />
                <div className="written-content">
                  <h2>Team Ankuran</h2>
                  <p>
                    Team Ankuran stands on the principle of togetherness and
                    that together we can overcome any obstacle thrown our way. A
                    team which is packed with people with various talents and
                    capabilities, and always looks forward to having fresh,
                    budding individuals who love to work as a team. Here we
                    appreciate and accept that change is the only constant in
                    life and to keep going, we must keep blooming by learning
                    new things with each passing day.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>

    // <div className="app__section about" id="about">
    //   <div className="app__section-container about-container">
    //     <h1>About</h1>
    //     <div className="content-container">
    //       <div className="content">
    //         <img src={technoImg} alt="techno-building" />
    //         <div className="written-content">
    //           <h2>Techno Main SaltLake</h2>
    //           <p>
    //             Techno Main Salt Lake, was established in the year of 2001. In
    //             the test of time, it has stood tall and thrives to be better
    //             than what it was yesterday. It is a place where everyone is
    //             motivated to be the best versions of themselves and do what they
    //             can do their best. A college where everyone believes that
    //             practice makes a human perfect, our efforts always pay off and
    //             that dreams do come true.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="content">
    //         <img src={ankuranLogo} alt="ankuran-logo" />
    //         <div className="written-content">
    //           <h2>Team Ankuran</h2>
    //           <p>
    //             Team Ankuran stands on the principle of togetherness and that
    //             together we can overcome any obstacle thrown our way. A team
    //             which is packed with people with various talents and
    //             capabilities, and always looks forward to having fresh, budding
    //             individuals who love to work as a team. Here we appreciate and
    //             accept that change is the only constant in life and to keep
    //             going, we must keep blooming by learning new things with each
    //             passing day.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;

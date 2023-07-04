import "./Testimonials.css";
import React from "react";
import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const Data = [
    {
      avatar: Avtr1,
      review: "loremdsfjdshgfggfdsgfchjdsgfhjdgsfvhjdsfvhsdbv",
      name: "roger smith",
    },
    {
      avatar: Avtr2,
      review: "loremdsfjdshgfggfdsgfchjdsgfhjdgsfvhjdsfvhsdbv",
      name: "smith",
    },
    {
      avatar: Avtr1,
      review: "loremdsfjdshgfggfdsgfchjdsgfhjdgsfvhjdsfvhsdbv",
      name: "roger smith",
    },
    {
      avatar: Avtr2,
      review: "loremdsfjdshgfggfdsgfchjdsgfhjdgsfvhjdsfvhsdbv",
      name: "smith",
    },
  ];

  return (
    <div>
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={true}
          className="container .testimonials_container mySwiper"
        >
          {Data.map(({ name, review, avatar }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <div className="client_avatar">
                    <img src={avatar} />
                  </div>
                  <h5 className="client_name">{name}</h5>
                  <small className="client_review">{review}</small>
                  {/* <a
                    class="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  >
                    <i class="fas fa-arrow-left left"></i>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  >
                    <i class="fas fa-arrow-right right"></i>
                  </a> */}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../css/swiper-customize.css";
import { Grid, Navigation, Thumbs } from "swiper";
import ImageShowBtn from "./ImageShowBtn";

function ImageList({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          576: {
            slidesPerView: "2",
            grid: {
              rows: 2,
            },
          },
          768: {
            slidesPerView: "4",
            grid: {
              rows: 2,
            },
          },
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Grid, Navigation, Thumbs]}
      >
        {images &&
          images.map((image) => (
            <SwiperSlide key={image.id}>
              <ImageShowBtn image={image} />
            </SwiperSlide>
          ))}
      </Swiper>
      {/* Swiper Thumbs only show in mobile */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        modules={[Navigation, Thumbs]}
        className="swiperThumb"
      >
        {images &&
          images.map((image) => (
            <SwiperSlide key={image.id}>
              <img alt={image.alt_description} src={image.urls.small} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default ImageList;

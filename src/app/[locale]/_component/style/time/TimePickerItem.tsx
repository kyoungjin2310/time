import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./timepicker.scss";
type TimePickerItemProps = {
  itemArr: (string | number)[];
  keyName: string;
  index: number;
};

const TimePickerItem = ({ itemArr, keyName, index }: TimePickerItemProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  return (
    <div className="timeWrap">
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        centeredSlides={true}
        className={`${keyName}`}
        onSwiper={setSwiperInstance}
        initialSlide={index}
        loop={true}
      >
        {itemArr.map((item: string | number, i: number) => (
          <SwiperSlide key={i}>
            <span>{item}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimePickerItem;

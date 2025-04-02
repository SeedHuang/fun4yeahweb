'use client';

import { useState } from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.scss'; // 引入样式文件
import BannerItem from './item';

/**
 * @description Banner 组件
 */
interface IBannerProps {
  /**
   * @description: 图片数组
   * @type {string[]}
   */
  srcs: string[]; // 图片数组
}

/**
 * @description Banner 组件
 * @param {IBannerProps} props - 组件属性
 */
export const Banner: React.FC<IBannerProps> = ({
  srcs,
}): React.ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0); // 当前幻灯片索引
  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex); // 更新当前幻灯片索引
  };
  return (
    <>
      <Swiper
        spaceBetween={0} // 幻灯片之间的间距
        slidesPerView={1} // 每次显示一个幻灯片
        loop={true} // 开启循环轮播
        speed={600} // 设置滚动动画时间为 500ms
        autoplay={{
          delay: 3000, // 每个幻灯片停留时间（毫秒）
          disableOnInteraction: false, // 用户交互后是否继续自动轮播
        }}
        modules={[Autoplay]} // 注册 A
        onSlideChange={handleSlideChange} // 监听幻灯片切换事件
      >
        {srcs?.map((src) => {
          return (
            <SwiperSlide key={src}>
              <BannerItem src={src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="f4y__banner__indicator">
        {srcs?.map((_, index) => {
          return (
            <div
              key={index}
              className={`f4y__banner__indicator__item ${
                currentIndex === index
                  ? 'f4y__banner__indicator__item--selected'
                  : ''
              }`}
            ></div>
          );
        })}
      </div>
    </>
  );
};
export default Banner;

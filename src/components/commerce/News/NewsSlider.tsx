import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import classNames from "classnames";
import React from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Navigation, } from "swiper";
import { BlogArticle } from "#data-transfer-types/src/types/DTO";
import { News } from "./News";

type TProps = {
	news: BlogArticle[]
} & HTMLElementAttributes<HTMLDivElement>

SwiperCore.use([Navigation]);

export const NewsSlider: React.FC<TProps> = ({ news, className, ...props }: TProps): JSX.Element => {

	return (
		<div className={classNames("news-slider__wrapper", className)} {...props}>
			<Swiper
				slidesPerView={3}
				spaceBetween={10}
				navigation={{}}
				breakpoints={{
					320: { slidesPerView: 1 },
					992: { slidesPerView: 2 },
					1300: { slidesPerView: 3 },
				}}
				className="news-slider">
				{
					news.map(item => (
						<SwiperSlide key={item.id} className="news-slider__slide">
							<News news={item} className="news-slider__news" />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	);
};
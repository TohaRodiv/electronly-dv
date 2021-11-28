import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Navigation, SwiperOptions, } from "swiper";
import classNames from "classnames";
import { Link } from "#ui/Link";


SwiperCore.use([Navigation]);

type TProps = {
	slides: Array<{
		title: string
		subtitle?: string
		image: string
	}>
	className?: string
} & SwiperOptions

export const TopSlider: React.FC<TProps> = ({ slides, className, ...swiperOptions }: TProps): JSX.Element => {

	const classes = classNames("top-slider", className);

	return (
		slides ? (
			<Swiper
				className={classes}
				slidesPerView={1}
				navigation={{}}
				{...swiperOptions} >
				{
					slides.map((slide, index) => (
						<SwiperSlide key={index} className="top-slider__slide">
							<div className="top-slider__body">
								{
									slide.title && <h2 className="top-slider__head">{slide.title}</h2>
								}
								
								{
									slide.subtitle && <div className="top-slider__description">{slide.subtitle}</div>
								}

								<div className="top-slider__btn-group">
									<Link href="/about" className="btn btn--dark top-slider__link">Подробнее</Link>
									<Link href="/catalog" className="btn btn--action top-slider__link">В каталог</Link>
								</div>
							</div>
							<img src={slide.image} alt="{slide.title}" className="top-slider__image" />
						</SwiperSlide>
					))
				}
			</Swiper>) : null
	);
};
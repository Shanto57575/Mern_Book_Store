import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import GOT from "../../../assets/got.png";
import HARRY from "../../../assets/harry.png";
import LORD from "../../../assets/boook.png";
import NARNIA from "../../../assets/naria.png";
import flowerBook from "../../../assets/stylishBook.png";

const Banner = () => {
	const divStyle = {
		backgroundImage:
			'url("https://t4.ftcdn.net/jpg/04/16/08/83/360_F_416088383_VYKbwdq0S4vqGwQJkZ8ZIRNDWITvjvP4.jpg")',
		width: "100%",
	};

	return (
		<div
			style={divStyle}
			className="md:pt-0 md:px-0 pt-28 px-3 md:flex items-center justify-between font-bold font-serif bg-cover bg-center w-full h-[800px] md:h-[650px]"
		>
			<div className="w-full px-5 md:w-1/2 mx-auto space-y-5 text-center md:text-start">
				<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold font-serif tracking-wide leading-loose text-gray-700 bg-gradient-to-r from-yellow-900 via-green-900 to-sky-800 inline-block text-transparent bg-clip-text">
					Swipe into the Magic of Reading with Bookswipe
				</h1>
				<p className="text-gray-700 hidden md:block text-justify">
					Uncover the magic of storytelling with seamless exploration on
					Bookswipe. Dive into a realm of diverse narratives, where every swipe
					brings you closer to your next captivating read
				</p>
				<button className="border px-5 py-3 hover:bg-black hover:text-white duration-300 rounded">
					See More
				</button>
			</div>
			<div className="w-full md:w-1/3 mx-auto">
				<Swiper
					effect={"cube"}
					grabCursor={true}
					cubeEffect={{
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.9,
					}}
					pagination={true}
					modules={[EffectCube, Pagination]}
					className="mySwiper"
				>
					<SwiperSlide title="slide">
						<img className="w-full h-80 md:h-96 mx-auto" src={GOT} />
					</SwiperSlide>
					<SwiperSlide title="slide">
						<img className="w-full h-80 md:h-96 mx-auto" src={HARRY} />
					</SwiperSlide>
					<SwiperSlide title="slide">
						<img className="w-full h-80 md:h-96 mx-auto" src={NARNIA} />
					</SwiperSlide>
					<SwiperSlide title="slide">
						<img className="w-full h-80 md:h-96 mx-auto" src={flowerBook} />
					</SwiperSlide>
					<SwiperSlide title="slide">
						<img className="w-full h-80 md:h-96 mx-auto" src={LORD} />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Banner;

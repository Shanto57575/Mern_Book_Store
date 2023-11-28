"use client";
import { Button, Card } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { FaBookOpen, FaUserGraduate } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./styles.css";

const AllBooks = () => {
	const [showBooks, setShowBooks] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/all-books`)
			.then((res) => res.json())
			.then((data) => {
				setShowBooks(data);
				console.log(data);
			});
	}, []);

	return (
		<div className="mx-2 md:mx-5 lg:mx-20">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				// pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper h-[600px]"
			>
				{showBooks.slice(10, 20).map((book) => (
					<SwiperSlide>
						<Card
							className="max-w-xs overflow-hidden rounded-md font-serif"
							imgSrc={book.coverImage}
							imgSize="md"
						>
							<Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
								<Heart size={20} weight="bold" color="white" />
							</Card.Container>
							<Card.Container className="space-y-4 p-6 bg-green-100">
								<Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
									<FaBookOpen size={20} color="#279fdb" />
									<span>{book.title}</span>
								</Card.Title>
								<Card.Container className="flex items-center justify-between">
									<Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
										<FaUserGraduate size={20} color="#279fdb" />
										<span>{book.author}</span>
									</Card.Title>
									<Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
										<span>{book.rating}</span>
										<FaStar size={20} color="#e5f411" />
									</Card.Title>
								</Card.Container>
								<Card.Container className="flex items-center justify-between">
									<Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
										<FcCalendar size={20} color="#5E718D" />
										<span>{book.publicationDate}</span>
									</Card.Title>
									<Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
										<BiSolidCategoryAlt size={20} color="#5E718D" />
										<span>{book.genre}</span>
									</Card.Title>
								</Card.Container>
								<Card.Container className="my-3 flex items-center justify-between">
									<Button type="primary" size="xs">
										<ShoppingCart size={20} />
										Add to Cart
									</Button>
									<Card.Title className="text-body-3 font-medium">
										<strike className="text-black">${book.price}</strike> $
										<span className="font-black">
											{book.price - (book.price * 20) / 100}
										</span>
									</Card.Title>
								</Card.Container>
							</Card.Container>
						</Card>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default AllBooks;

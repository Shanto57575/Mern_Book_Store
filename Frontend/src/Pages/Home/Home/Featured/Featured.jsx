"use client";
import { Tabs } from "keep-react";
import { useEffect, useState } from "react";
import { Badge, Button, Card } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Featured = () => {
	const [Category, setCategory] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/all-books`)
			.then((res) => res.json())
			.then((data) => {
				setCategory(data);
				console.log(data);
			});
	}, []);

	const category = [
		{ name: "Fiction" },
		{ name: "Non-Fiction" },
		{ name: "Mystery" },
		{ name: "Novel" },
		{ name: "Autobiography" },
	];

	return (
		<div className="w-full text-center">
			<h1 className="text-3xl font-serif font-semibold mt-20 mb-10 text-stone-600 underline">
				Our Best Seller Books
			</h1>
			<Tabs
				className="w-full mx-auto"
				aria-label="tabs"
				style="underline"
				borderPosition="bottom"
			>
				{category.map((genre, idx) => (
					<Tabs.Item key={idx} title={genre.name}>
						<div>
							<Swiper
								slidesPerView={1}
								spaceBetween={10}
								pagination={{
									clickable: true,
								}}
								breakpoints={{
									"@0.00": {
										slidesPerView: 1,
										spaceBetween: 10,
									},
									"@0.75": {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									"@1.00": {
										slidesPerView: 3,
										spaceBetween: 40,
									},
									"@1.50": {
										slidesPerView: 4,
										spaceBetween: 50,
									},
								}}
								modules={[Pagination]}
								className="mySwiper"
							>
								{Category.filter((item) => item.genre == genre.name).map(
									(book, index) => (
										<SwiperSlide key={index}>
											<Card
												className="shadow-2xl shadow-black font-serif max-w-xs overflow-hidden rounded-md bg-emerald-200"
												imgSrc={book.coverImage}
												imgSize="xl"
											>
												<Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
													<Heart size={20} weight="bold" color="white" />
												</Card.Container>
												<Card.Container className="p-6">
													<Card.Container className="flex items-center justify-between">
														<Badge size="xs" colorType="light" color="gray">
															For Sale
														</Badge>
														<Card.Title>${book.price}</Card.Title>
													</Card.Container>
													<Card.Container className="my-3">
														<Card.Title>{book.title}</Card.Title>
														<Card.Description>
															{book.description}
														</Card.Description>
													</Card.Container>
													<Card.Container className="flex items-center justify-start gap-5">
														<Button size="sm" type="outlineGray">
															<span className="pr-2">
																<ShoppingCart size={24} />
															</span>
															Add To Cart
														</Button>
													</Card.Container>
												</Card.Container>
											</Card>
										</SwiperSlide>
									)
								)}
							</Swiper>
						</div>
					</Tabs.Item>
				))}
			</Tabs>
		</div>
	);
};

export default Featured;

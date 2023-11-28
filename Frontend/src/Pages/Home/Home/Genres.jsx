const Genres = () => {
	const genres = [
		// {
		// 	name: "Fiction",
		// 	img: "https://t3.ftcdn.net/jpg/06/62/81/82/240_F_662818278_j4WD1Hg9jecxqkN3YRljrxHAfy7HJX9V.jpg",
		// },
		{
			name: "Fiction",
			img: "https://t4.ftcdn.net/jpg/05/80/10/33/240_F_580103305_qXQ9FbFtaxepqQe2axaX4YTl689sX3LH.jpg",
		},
		{
			name: "Novel",
			img: "https://t4.ftcdn.net/jpg/05/98/84/83/240_F_598848357_y6yvVDEsDMOGAb813az57op1dWrw1FSw.jpg",
		},
		{
			name: "Mystery",
			img: "https://t3.ftcdn.net/jpg/04/39/56/42/240_F_439564240_DqaxOmObd8uzSRmiB1zylw3bLNAmcXGg.jpg",
		},
		{
			name: "Romance",
			img: "https://t4.ftcdn.net/jpg/06/41/16/01/240_F_641160173_4lJyIbNiHG8UXYSxIHn8W1U2dzPOEKr5.jpg",
		},
	];

	const divStyle = {
		backgroundSize: "cover",
		width: "100%",
		height: "200px",
		filter: "brightness(0.8)",
		objectFit: "cover",
	};

	return (
		<>
			<div className="flex items-center justify-between md:mx-10 mb-5">
				<div>
					<h1 className="text-4xl text-stone-900 font-serif">Genres Books</h1>
				</div>
				<div className=""></div>
				<button className="text-md font-serif border px-8 py-3 bg-[#4eaa90] hover:bg-[#2a4e44] text-white duration-300 rounded">
					View All
				</button>
			</div>

			<div className="md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
				{genres.map((item, index) => (
					<div
						key={index}
						style={{ ...divStyle, backgroundImage: `url(${item.img})` }}
					>
						<p className="flex justify-center text-3xl text-white font-serif py-20 bg-transparent">
							{item.name}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Genres;

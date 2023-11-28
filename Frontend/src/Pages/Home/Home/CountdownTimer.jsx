import { useState, useEffect } from "react";

const CountdownTimer = () => {
	const calculateTimeLeft = () => {
		const difference = new Date("2023-12-31") - new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				),
				minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((difference % (1000 * 60)) / 1000),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	const formatTime = (time) => (time < 10 ? `0${time}` : time);

	return (
		<div className="countdown-timer flex items-center justify-center gap-2 md:gap-4 lg:gap-8 text-emerald-500 font-extrabold">
			<div className="md:border-x-2 md:px-4">
				<div>{formatTime(timeLeft.days)}</div>
				<div className="label">Days</div>
			</div>
			<div className="md:border-x-2 md:px-4">
				<div>{formatTime(timeLeft.hours)}</div>
				<div className="label">Hours</div>
			</div>
			<div className="md:border-x-2 md:px-4">
				<div>{formatTime(timeLeft.minutes)}</div>
				<div className="label">Minutes</div>
			</div>
			<div className="md:border-x-2 md:px-4">
				<div>{formatTime(timeLeft.seconds)}</div>
				<div className="label">Seconds</div>
			</div>
		</div>
	);
};

export default CountdownTimer;

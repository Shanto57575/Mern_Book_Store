import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import book from "../../../src/assets/book.png";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navItems = [
		{ link: "Home", path: "/" },
		{ link: "Login", path: "/login" },
		{ link: "SignUp", path: "/signUp" },
	];

	return (
		<header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-1000">
			<nav
				className={`px-14 ${
					isSticky
						? "sticky top-0 left-0 right-0 bg-gradient-to-r from-emerald-400 via-yellow-200 to-emerald-200"
						: ""
				}`}
			>
				<div>
					<div className="flex items-center justify-between">
						<img className="w-40" src={book} alt="" />
						<div>
							<ul className="md:flex space-x-12 hidden">
								{navItems.map(({ link, path }) => (
									<Link
										className="font-bold font-serif text-2xl text-gray-700 hover:text-white hover:duration-300"
										key={path}
										to={path}
									>
										{link}
									</Link>
								))}
							</ul>
							<div>
								<button
									onClick={toggleMenu}
									className="text-black focus:outline-none"
								>
									{isMenuOpen ? (
										<RxCross1 size={50} className="text-black" />
									) : (
										<FaBars size={40} className="text-black md:hidden" />
									)}
								</button>
							</div>
						</div>
						{/* For Small Device */}
						<div
							className={`space-y-4 h-screen bg-gradient-to-br from-green-200 via-green-400 to-green-600 -z-10 ${
								isMenuOpen ? "fixed top-0 right-0 left-0" : "hidden"
							}`}
						>
							<ul className="items-center justify-center w-full mx-auto text-center md:hidden pt-20">
								{navItems.map(({ link, path }) => (
									<Link
										key={path}
										to={path}
										className="block font-bold font-serif text-xl mb-5 underline text-gray-900 uppercase cursor-pointer hover:text-blue-500"
									>
										{link}
									</Link>
								))}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;

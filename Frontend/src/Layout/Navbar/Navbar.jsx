import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import book from "../../../src/assets/book.png";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	const location = useLocation();
	console.log(location);

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
		<header className="z-10 w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-1000">
			<nav
				className={`px-14 ${
					isSticky ? "sticky top-0 left-0 right-0 bg-black bg-opacity-30" : ""
				}`}
			>
				<div>
					<div className="flex items-center justify-between">
						<img className="w-40" src={book} alt="logo" />
						<div>
							<ul className="md:flex space-x-12 hidden">
								{navItems.map(({ link, path }) => (
									<Link
										className={
											location.pathname === path
												? "border-b-4 border-stone-700 px-3 py-0.5 font-bold font-serif text-lg text-[#715a42] hover:text-gray-500 hover:duration-300"
												: `font-bold font-serif text-lg text-[#715a42] hover:border border-stone-600 hover:p-2 hover:duration-300`
										}
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
										<RxCross1 size={50} className="text-[#715a42]" />
									) : (
										<FaBars size={40} className="text-[#715a42] md:hidden" />
									)}
								</button>
							</div>
						</div>
						{/* For Small Device */}
						<div
							className={`space-y-4 h-screen bg-[#ecd9ed] -z-50 ${
								isMenuOpen ? "fixed top-0 right-0 left-0" : "hidden"
							}`}
						>
							<ul className="items-center justify-center w-full mx-auto text-center md:hidden pt-20">
								{navItems.map(({ link, path }) => (
									<Link
										key={path}
										to={path}
										className="block font-bold font-serif text-xl mb-5 underline text-stone-500 uppercase cursor-pointer hover:text-white"
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

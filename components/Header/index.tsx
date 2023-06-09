"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
//import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const navbarToggleHandler = () => {
		setNavbarOpen((prev) => !prev);
	};

	// Sticky Navbar
	const [sticky, setSticky] = useState(false);
	const handleStickyNavbar = () => {
		if (window.scrollY >= 80) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleStickyNavbar);
	});

	// submenu handler
	const [openIndex, setOpenIndex] = useState(-1);
	const handleSubmenu = (index) => {
		if (openIndex === index) {
			setOpenIndex(-1);
		} else {
			setOpenIndex(index);
		}
	};

	return (
		<>
			<header
				className={`header left-0 top-0 z-40 flex w-full items-center bg-transparent ${
					sticky
						? "!fixed !z-[9999] border-b-2 border-primary !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-darkgray dark:!bg-opacity-60"
						: "absolute"
				}`}
			>
				<div className="container">
					<div className="relative -mx-4 flex items-center justify-between">
						<div className="w-60 max-w-full  px-4 xl:mr-12">
							<Link
								href="/"
								className={`header-logo block w-full ${
									sticky ? "py-5 lg:py-2" : "py-8"
								} `}
							>
								<Image
									src="/images/logo/logo-full.svg"
									alt="logo"
									width={130}
									height={100}
									className="hidden  dark:block"
								/>
							</Link>
						</div>
						<div className="flex w-full items-center justify-between px-4">
							<div>
								<button
									onClick={navbarToggleHandler}
									id="navbarToggler"
									aria-label="Mobile Menu"
									className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
								>
									<span
										className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
											navbarOpen ? " top-[7px] rotate-45" : " "
										}`}
									/>
									<span
										className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
											navbarOpen ? "opacity-0 " : " "
										}`}
									/>
									<span
										className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
											navbarOpen ? " top-[-8px] -rotate-45" : " "
										}`}
									/>
								</button>
								<nav
									id="navbarCollapse"
									className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-primary bg-white px-6 py-4 backdrop-blur-sm duration-300 dark:border-primary dark:bg-darkgray/70  lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
										navbarOpen
											? "visibility top-full opacity-100"
											: "invisible top-[120%] opacity-0"
									}`}
								>
									<ul className="block  lg:flex lg:space-x-12">
										{menuData.map((menuItem) => (
											<li key={menuItem.id} className="group relative">
												{menuItem.path && (
													<Link
														href={menuItem.path}
														className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
													>
														{menuItem.title}
													</Link>
												)}
											</li>
										))}
									</ul>
								</nav>
							</div>
							<div className="flex items-center justify-end pr-16 lg:pr-0">
								<Link href="/signup" className="btn-primary">
									Get started &rarr;
								</Link>
								{/* <div>
									<ThemeToggler />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;

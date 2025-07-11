"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


const slides = [
	{
		id: 1,
		title: "Summer Sale Collections",
		description: "Sale! Up to 50% off!",
		img: "/img1.jpeg",
		url: "/",
		bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
	},
	{
		id: 2,
		title: "Winter Sale Collections",
		description: "Sale! Up to 50% off!",
		img: "/img2.jpeg",
		url: "/",
		bg: "bg-gradient-to-r from-pink-50 to-blue-50",
	},
	{
		id: 3,
		title: "Spring Sale Collections",
		description: "Sale! Up to 50% off!",
		img: "/img3.jpeg",
		url: "/",
		bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
	},
];

export default function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCurrentSlide((prev) => (prev + 1) % slides.length);
	// 	}, 3000); 

	// 	return () => clearInterval(interval);
	// }, []);



	return (
		<div className="h-[calc(100vh-80px)] overflow-hidden">
			<div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{slides.map((slide) => (
					<div
						className={`${slide.bg} h-full w-screen flex flex-col gap-16 xl:flex-row`}
						key={slide.id}
					>
						{/* TEXT CONTAINER */}
						<div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
							<h2 className="text-xl lg:text-3xl 2xl:text-5xl font-semibold">
								{slide.description}
							</h2>
							<h1 className="text-5xl lg:text-7xl 2xl:text-9xl ">
								{slide.title}
							</h1>
							<Link href={slide.url}>
								<button className="rounded-md py-3 px-4 bg-black text-white">
									Shop Now
								</button>
							</Link>
						</div>
						{/* IMAGE CONTAINER */}
						<div className="relative h-1/2 xl:w-1/2 xl:h-full">
							<Image
								src={slide.img}
								alt=""
								fill
								sizes="100%"
								className="object-cover"
							/>
						</div>
					</div>
				))}
			</div>
			<div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
				{slides.map((slide, index) => (
					<div
						className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
							currentSlide === index ? "scale-150" : ""
						}`}
						key={slide.id}
						onClick={() => setCurrentSlide(index)}
					>
						{currentSlide === index && (
							<div className="w-[6px] h-[6px] bg-gray-600 rounded-full" />
						)}
					</div>
				))}
			</div>
		</div>
	);
}

"use client"

import Image from "next/image";
import { useState } from "react";


export default function ProductImages() {

const images = [
  {id: 1, src: "/img1.jpeg"},
  {id: 1, src: "/img2.jpeg"},
  {id: 1, src: "/img3.jpeg"},
  
]

const [index, setIndex] = useState(0)


	return (
		<div className="">
			<div className="h-[500px] relative">
				<Image
					src={images[index].src}
					alt=""
					fill
					sizes="50vw"
					className="object-cover rounded-md"
				/>
			</div>
			<div className="flex justify-start gap-4 mt-8 cursor-pointer">
				{images.map((img, i) => (
          <div className="w-1/4 h-32 relative gap-4 mt-8" key={img.id} onClick={() => setIndex(i)}>
					<Image
						src={img.src}
						alt=""
						fill
						sizes="30vw"
						className="object-cover rounded-md"
					/>
				</div>
				))}
			
			</div>
		</div>
	);
}

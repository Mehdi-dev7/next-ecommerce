import Link from "next/link";
import Image from "next/image";

export default function ProductList() {
	return (
		<div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
			<Link href="/products" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
				<div className="relative w-full h-80">
					<Image src="/img3.jpeg" alt="Product Image" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
					<Image src="/img2.jpeg" alt="Product Image" fill sizes="25vw" className="absolute object-cover rounded-md" />
				</div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ring-1 ring-red-400 text-red-400 py-2 px-4 text-xs hover:bg-red-400 hover:text-white transition-all duration-300">Add to cart</button>

			</Link>
			<Link href="/products" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
				<div className="relative w-full h-80">
					<Image src="/img1.jpeg" alt="Product Image" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
					<Image src="/img3.jpeg" alt="Product Image" fill sizes="25vw" className="absolute object-cover rounded-md" />
				</div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ring-1 ring-red-400 text-red-400 py-2 px-4 text-xs hover:bg-red-400 hover:text-white transition-all duration-300">Add to cart</button>

			</Link>
			<Link href="/products" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
				<div className="relative w-full h-80">
					<Image src="/img2.jpeg" alt="Product Image" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
					<Image src="/img1.jpeg" alt="Product Image" fill sizes="25vw" className="absolute object-cover rounded-md" />
				</div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ring-1 ring-red-400 text-red-400 py-2 px-4 text-xs hover:bg-red-400 hover:text-white transition-all duration-300">Add to cart</button>

			</Link>
			<Link href="/products" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
				<div className="relative w-full h-80">
					<Image src="/img3.jpeg" alt="Product Image" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
					<Image src="/img1.jpeg" alt="Product Image" fill sizes="25vw" className="absolute object-cover rounded-md" />
				</div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ring-1 ring-red-400 text-red-400 py-2 px-4 text-xs hover:bg-red-400 hover:text-white transition-all duration-300">Add to cart</button>

			</Link>
		</div>
	);
}

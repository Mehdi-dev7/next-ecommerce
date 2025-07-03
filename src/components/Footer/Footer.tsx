import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-200 text-sm mt-24">
			{/* TOP */}
			<div className="flex flex-col md:flex-row justify-between gap-24">
				{/* LEFT */}
				<div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
					<Link href="/">
						<div className="text-2xl tracking-wide">Mehdidev7</div>
					</Link>
					<p>73, rue edouard vaillant, 93100 Montreuil, France</p>
					<span className="font-semibold">hello@mehdidev7.dev</span>
					<span className="font-semibold">+33 6 12 34 56 78</span>
					<div className=" flex gap-6">
						<Image src="/facebook.png" alt="Facebook" width={16} height={16} />
						<Image
							src="/instagram.png"
							alt="Instagram"
							width={16}
							height={16}
						/>
						<Image src="/youtube.png" alt="YouTube" width={16} height={16} />
						<Image
							src="/pinterest.png"
							alt="Pinterest"
							width={16}
							height={16}
						/>
						<Image src="/x.png" alt="X" width={16} height={16} />
					</div>
				</div>
				{/* CENTER */}
				<div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SUBSCRIBE</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
        </div>
				{/* RIGHT */}
				<div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
					<h1>SUBSCRIBE</h1>
					<p>Get the latest updates and offers.</p>
					<div>
						<input
							type="text"
							placeholder="Enter your email"
							className="p-4 w-3/4"
						/>
						<button className="w-1/4 p-4 bg-red-400 text-white">JOIN</button>
					</div>
					<span className="font-semibold">Secure Payments</span>
					<div className="flex justify-between">
						<Image src="/discover.png" alt="Discover" width={40} height={20} />
						<Image src="/skrill.png" alt="Skrill" width={40} height={20} />
						<Image src="/paypal.png" alt="PayPal" width={40} height={20} />
						<Image
							src="/mastercard.png"
							alt="MasterCard"
							width={40}
							height={20}
						/>

						<Image src="/paypal.png" alt="PayPal" width={40} height={20} />
						<Image src="/visa.png" alt="Visa" width={40} height={20} />
					</div>
				</div>
			</div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-16">
        <div>© 2023 Mehdidev7. All rights reserved.</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <span className="text-gray mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div>
            <span className="text-gray mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>

      </div>
		</div>
	);
}

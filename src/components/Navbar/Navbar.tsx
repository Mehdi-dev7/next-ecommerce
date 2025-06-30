import Link from "next/link";
import Menu from "../Menu/Menu";
import Image from "next/image";
import NavbarIcons from "../Navbar/NavbarIcons";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
	return (
		<div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-200">
			{/* Mobile */}
			<div className="flex items-center justify-between h-full md:hidden">
				<Link href="/">
					<div className="text-2xl tracking-wide">MehdiDev7</div>
				</Link>
				<Menu />
			</div>
			{/* Desktop */}
			<div className="hidden md:flex items-center justify-between h-full gap-8">
				{/* LEFT */}
				<div className="w-1/3 xl:w-1/2 flex items-center gap-12">
					<Link href="/" className="flex items-center gap-3">
						<Image src="/logo.png" alt="Logo" width={24} height={24} />
						<div className="text-2xl tracking-wide">MehdiDev7</div>
					</Link>
					<div className="hidden xl:flex gap-4">
						<Link href="/">Home</Link>
						<Link href="/">Shop</Link>
						<Link href="/">Deals</Link>
						<Link href="/">About</Link>
						<Link href="/">Contact</Link>
					</div>
				</div>
				{/* RIGHT */}
				<div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
					<SearchBar />
					<NavbarIcons />
				</div>
			</div>
		</div>
	);
}

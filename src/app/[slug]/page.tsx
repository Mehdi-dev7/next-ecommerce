import AddProducts from "@/components/AddProducts/AddProducts";
import CustomizeProducts from "@/components/CustomizeProducts/CustomizeProducts";
import ProductImages from "@/components/ProductImages/ProductImages";

export default function SinglePage() {
	return (
		<div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
			{/* IMG */}
			<div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
				<ProductImages />
			</div>
			{/* TEXT */}
			<div className="w-full lg:w-1/2 flex flex-col gap-6">
				<h1 text-4xl font-medium>
					Nom du Produit
				</h1>
				<p className="text-gray-500">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quis,
					assumenda error doloribus incidunt voluptas?
				</p>
				<div className="h[2px] bg-gray-600" />
				<div className="flex items-center gap-4">
					<h3 className=" text-xl text-gray-500 line-through">59€</h3>
					<h3 className="font-medium text-2xl">49€</h3>
				</div>
				<div className="h[2px] bg-gray-600" />
				<CustomizeProducts />
				<AddProducts />
				<div className="h[2px] bg-gray-600" />
				<div className="text-sm">
					<h4 className="font-medium mb-4">Description</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						natus minima maxime, unde, odio corrupti fuga dicta consectetur
						amet, excepturi eos facilis numquam explicabo illo.
					</p>
				</div>
				<div className="text-sm">
					<h4 className="font-medium mb-4">Livraison & retour</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						natus minima maxime, unde, odio corrupti fuga dicta consectetur
						amet, excepturi eos facilis numquam explicabo illo.
					</p>
				</div>
				<div className="text-sm">
					<h4 className="font-medium mb-4">Paiemants securisés</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						natus minima maxime, unde, odio corrupti fuga dicta consectetur
						amet, excepturi eos facilis numquam explicabo illo.
					</p>
				</div>
			</div>
		</div>
	);
}

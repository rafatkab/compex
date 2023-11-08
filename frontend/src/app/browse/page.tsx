import { products } from "./products";

export default function page() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-slate-700 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img src={product.imageSrc} alt={product.imageAlt} />
              </div>
              <h3 className="mt-4 text-xl ">{product.name}</h3>
              {/* <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

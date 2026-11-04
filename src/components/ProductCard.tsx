import type { Product } from "../types";
// export interface ProductData {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

interface ProductCardProps {
  product: Product;
  onBuy: () => void;
}

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  const { name, description, price, image } = product;

  return (
    <div className="card bg-base-100 border border-base-300 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      <figure className="h-80 bg-base-100 p-5">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </figure>

      <div className="card-body p-5 gap-3">

        <h2 className="card-title text-base text-base-content line-clamp-2 min-h-12">
          {name}
        </h2>

        <p className="text-sm text-base-content/60 line-clamp-2">
          {description}
        </p>

        <div className="card-actions justify-between items-center mt-auto pt-4">
          <span className="text-lg font-bold text-primary">
            ฿{price.toLocaleString("th-TH")}
          </span>

          <button onClick={onBuy} className="btn btn-primary btn-sm rounded-full px-5">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
}

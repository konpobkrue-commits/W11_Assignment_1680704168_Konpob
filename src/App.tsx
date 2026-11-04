import { useState } from "react";
import type { Product, CartItem } from "./types";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

const products: Product[] = [
  {
    id: 1,
    name: "Monkey D. Luffy - Manga Rare",
    description: "OP05-119 | Manga Rare",
    price: 199000,
    image: "https://optcg-api.arjunbansal-ai.workers.dev/images/OP05-119_p2",
  },
  {
    id: 2,
    name: "Shanks - Manga Rare",
    description: "OP01-120 | Manga Rare",
    price: 149000,
    image: "https://optcg-api.arjunbansal-ai.workers.dev/images/OP01-120_p2",
  },
  {
    id: 3,
    name: "Roronoa Zoro - Manga Rare",
    description: "OP06-118 | Manga Rare",
    price: 99000,
    image: "https://optcg-api.arjunbansal-ai.workers.dev/images/OP06-118_p2",
  },
  {
    id: 4,
    name: "Portgas D. Ace - Manga Rare",
    description: "OP02-013 | Manga Rare",
    price: 69000,
    image: "https://optcg-api.arjunbansal-ai.workers.dev/images/OP02-013_p2",
  },
  {
    id: 5,
    name: "Trafalgar Law - Manga Rare",
    description: "OP05-069 | Manga Rare",
    price: 59000,
    image: "https://optcg-api.arjunbansal-ai.workers.dev/images/OP05-069_p2",
  },
  {
    id: 6,
    name: "Tony Tony Chopper - Manga Rare",
    description: "EB01-006 | Manga Rare",
    price: 89000,
    image: "https://optcg-api.arjunbansal-ai.workers.dev/images/EB01-006_p2",
  },
  {
    id: 7,
    name: "Nami - Manga Rare",
    description: "OP01-016 | Manga Rare - PRB01",
    price: 79000,
    image: "https://optcg-api.arjunbansal-ai.workers.dev/images/OP01-016_p8",
  },
  {
    id: 8,
    name: "Buggy - Manga Rare",
    description: "OP09-051 | Manga Rare",
    price: 49000,
    image: "https://optcg-api.arjunbansal-ai.workers.dev/images/OP09-051_p2",
  },
];

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item,
        );
      }

      return [...prev, { ...product, amount: 1 }];
    });
  };

  const handleChangeAmount = (id: number, amount: number) => {
    if (!Number.isInteger(amount) || amount < 1) return;

    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, amount: amount } : item)),
    );
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    alert("สั่งซื้อสินค้าเรียบร้อยแล้ว");
    setCart([]);
  };

  return (
    <>
      <main id="home" className="min-h-screen bg-base-200">
        <section
          id="products"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Our Products</h1>
            <p className="text-base-content/60 mt-3">
              Discover our latest collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuy={() => handleAddToCart(product)}
              />
            ))}
          </div>

          <div className="mt-12">
            <Cart
              items={cart}
              onChangeAmount={handleChangeAmount}
              onRemove={handleRemoveFromCart}
              onCheckout={handleCheckout}
            />
          </div>
        </section>
      </main>
    </>
  );
}

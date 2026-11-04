import type { CartItem } from "../types";
import CartItemRow from "./CartItemRow";
import CartSummary from "./CartSummary";

// กำหนด Props ที่รับมาจาก App.tsx
interface CartProps {
  items: CartItem[];
  onChangeAmount: (id: number, amount: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

export default function Cart({
  items,
  onChangeAmount,
  onRemove,
  onCheckout,
}: CartProps) {
  return (
    <div className="bg-base-100 rounded-2xl shadow-lg p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Product Cart</h2>

      {items.length === 0 ? (
        // กรณีที่ตะกร้าว่าง
        <div className="text-center py-16">
          <p className="text-5xl mb-4">🛒</p>
          <p className="text-base-content/60">กรุณาเลือก Product</p>
        </div>
      ) : (
        // กรณีที่มีสินค้าในตะกร้า
        <div>
          {items.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onChangeAmount={onChangeAmount}
              onRemove={onRemove}
            />
          ))}

          <CartSummary items={items} />

          <button className="btn btn-primary w-full mt-6" onClick={onCheckout}>
            ชำระเงิน
          </button>
        </div>
      )}
    </div>
  );
}

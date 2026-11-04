import type { CartItem } from "../types";

interface CartSummaryProps {
  items: CartItem[];
}

export default function CartSummary({ items }: CartSummaryProps) {
  // คำนวณจำนวนสินค้าทั้งหมด
  const totalAmount = items.reduce((total, item) => total + item.amount, 0);

  // คำนวณราคารวมทั้งหมด
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.amount,
    0,
  );

  return (
    <div className="border-t border-base-300 pt-5 mt-5">
      <div className="flex justify-between items-center">
        <span>จำนวนสินค้าทั้งหมด {totalAmount} ชิ้น</span>

        <div className="text-right">
          <p className="text-sm text-base-content/60">Total Price</p>

          <p className="text-2xl font-bold text-primary">
            ฿{totalPrice.toLocaleString("th-TH")}
          </p>
        </div>
      </div>
    </div>
  );
}

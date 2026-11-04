import type { CartItem } from "../types";

interface CartItemRowProps {
  item: CartItem;
  onChangeAmount: (id: number, amount: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItemRow({
  item,
  onChangeAmount,
  onRemove,
}: CartItemRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-base-300 py-5">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-28 object-contain"
      />

      <div className="flex-1">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-sm text-base-content/60">{item.description}</p>
        <p className="text-primary font-semibold">
          ฿{item.price.toLocaleString("th-TH")}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="btn btn-sm"
          disabled={item.amount <= 1}
          onClick={() => onChangeAmount(item.id, item.amount - 1)}
        >
          -
        </button>

        <input
          type="number"
          min="1"
          value={item.amount}
          onChange={(e) => onChangeAmount(item.id, Number(e.target.value))}
          className="input input-bordered input-sm w-16 text-center"
        />

        <button
          className="btn btn-sm"
          onClick={() => onChangeAmount(item.id, item.amount + 1)}
        >
          +
        </button>
      </div>

      <div className="font-bold sm:w-32 sm:text-right">
        ฿{(item.price * item.amount).toLocaleString("th-TH")}
      </div>

      <button
        className="btn btn-error btn-outline btn-sm"
        onClick={() => onRemove(item.id)}
      >
        ลบ
      </button>
    </div>
  );
}

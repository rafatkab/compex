import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-start bg-gray-800 p-5">
      <div className="flex gap-4">
        <div className="font font-bold text-sky-500">CompEx</div>
        <div className="hover:text-orange-500">
          <Link href="/">Build</Link>
        </div>
        <div className="hover:text-orange-500">
          <Link href="/browse">Browse</Link>
        </div>
        <div className="hover:text-orange-500">
          <Link href="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

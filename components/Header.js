import { ShoppingCart } from "lucide-react";
import Link from 'next/link';

function Header() {
    return (
        <header className="px-6 py-4 flex justify-between items-center bg-gray-900 border-b-4 border-blue-600 shadow-lg">
            <h1 className="font-extrabold text-3xl tracking-wide hover:text-yellow-300 transition-colors duration-300">GlobalGoods</h1>
            <nav className="flex gap-8">
                <Link href="/" className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                    Home
                </Link>
                <Link href="/product" className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                    Productos
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                    Contacto
                </Link>
                <Link href="/admin" className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                    Login
                </Link>
                <Link href="/carrito" className="relative flex items-center hover:text-yellow-300 transition-colors duration-300 ease-in-out text-lg">
                    <ShoppingCart className="w-6 h-6" />
                </Link>
            </nav>
        </header>
    );
}

export default Header;

import Image from "next/image";
import Link from "next/link";

function ProductList({ productos }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6 bg-gray-200">
            {productos.map((producto) => (
                <article
                    className="group shadow-lg rounded-xl overflow-hidden relative bg-white hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                    key={producto.id}
                >
                 
                    <div className="relative w-full h-56 overflow-hidden">
                        <Image
                            src={producto.thumbnail}
                            alt={`Imagen de ${producto.title}`}
                            layout="fill"
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="border-t border-gray-300 my-3" />

                    <div className="p-5 bg-blue-50">
                        <h2 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            {producto.title}
                        </h2>
                        <p className="text-gray-600 font-medium">$ {producto.price}</p>
                        <Link
                            href={`/product/${producto.id}`}
                            className="mt-3 inline-block text-sm px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300"
                        >
                            Ver más
                        </Link>
                    </div>

                </article>
            ))}
        </section>
    );
}

export default ProductList;

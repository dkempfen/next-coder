"use client";


import { useState, useEffect } from "react";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function ProductLayout({ children }) {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        if (category) {
            fetch(`https://dummyjson.com/products/category/${category}`)
                .then((response) => response.json())
                .then((data) => setProducts(data.products))
                .catch((error) => console.error("Error fetching products:", error));
        }
    }, [category]);

    const handleFilterClick = (category) => {
        setCategory(category);
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 p-4 text-gray-900">
            <aside className="min-w-[250px] bg-gray-200 p-4 rounded-lg shadow-md">
                <PageTitle>Filtros</PageTitle>
                <div className="flex flex-col gap-4 mt-4">
                    <button onClick={() => handleFilterClick("electronics")} className="text-blue-700 hover:underline">
                        Electro
                    </button>
                    <button onClick={() => handleFilterClick("home")} className="text-blue-700 hover:underline">
                        Hogar
                    </button>
                </div>
            </aside>
            <div className="grow bg-gray-200 p-4 rounded-lg shadow-md text-gray-900">
                {category && (
                    <div>
                        <h2>Productos en la categoría: {category}</h2>
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>{product.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}


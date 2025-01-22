import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function ProductLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-4 text-gray-900">
            <aside className="min-w-[250px] bg-gray-200 p-4 rounded-lg shadow-md">
                <PageTitle>Filtros</PageTitle>
                <div className="flex flex-col gap-4 mt-4">
                    <Link href="/product/cat/electro" className="text-blue-700 hover:underline">
                        Electro
                    </Link>
                    <Link href="/product/cat/home" className="text-blue-700 hover:underline">
                        Hogar
                    </Link>
                </div>
            </aside>
            <div className="grow bg-gray-200 p-4 rounded-lg shadow-md text-gray-900">
                {children}
            </div>
        </div>
    );
}

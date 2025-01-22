import PageTitle from "@/components/PageTitle";
import ProductList from "@/components/ProductList";

export default async function ProductPage() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const { products } = await response.json();

        return (
            <>
                <PageTitle>Productos</PageTitle>
                <ProductList productos={products} />
            </>
        );
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return (
            <>
                <PageTitle>Error</PageTitle>
                <p>Failed to load products. Please try again later.</p>
            </>
        );
    }
}
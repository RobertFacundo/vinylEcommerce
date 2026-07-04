import CardSkeleton from "@/shared/components/loaders/CardSkeleton";
import ProductCard from "./ProductCard";
import { ProductsResponse} from "../../types/product";

type ProductGridProps = {
    isLoading: boolean,
    products?: ProductsResponse
}

const ProductGrid = ({ isLoading, products }: ProductGridProps) => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {isLoading || !products
                ? Array.from({ length: 12 }).map((_, i) => (
                    <CardSkeleton key={i} />
                ))
                : products.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )
};

export default ProductGrid;
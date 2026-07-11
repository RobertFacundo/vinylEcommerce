import ProductCard from "@/features/shop/components/products/ProductCard";
import { useRecommendations } from "../../hooks/useRecommendations";

interface RecommendationProps {
    artistName: string;
    currentAlbumId: number;
}

const Recommendation = ({
    artistName,
    currentAlbumId
}: RecommendationProps) => {
    const { data: recommendations, isLoading, error } = useRecommendations(artistName, currentAlbumId);
    console.log(recommendations, 'log del recommendation')

    if (isLoading) {
        return <p>Cargando recomendaciones...</p>;
    }
    if (error) {
        return <p>Error al cargar recomendaciones.</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-4 gap-16">
                {recommendations?.map((album) => (
                    <ProductCard
                        key={album.id}
                        product={album}
                    />
                ))}
            </div>
        </div>
    )
};

export default Recommendation;
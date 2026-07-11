"use client"
import DetailContent from "./components/content/DetailContent";
import TrackList from "./components/tracks/TrackList";
import { useAlbum } from "./hooks/useAlbum";

interface ProductDetailViewProps {
    id: string;
}

const ProductDetailView = ({ id }: ProductDetailViewProps) => {

    const {
        data: album,
        isLoading,
        error
    } = useAlbum(id);


    if (isLoading) {
        return <p>Cargando...</p>;
    }


    if (error || !album) {
        return <p>Album not found</p>;
    }

    return (
        <>
            <DetailContent album={album}/>
            <TrackList tracks={album.tracks}/>
        </>
    )
};

export default ProductDetailView;
"use client"
import DetailContent from "./components/content/DetailContent";
import ProductDetailSkeleton from "./components/loaders/ProductDetailSkeleton";
import Recommendation from "./components/recommendations/Recommendation";
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
        return <ProductDetailSkeleton/>;
    }


    if (error || !album) {
        return <p>Album not found</p>;
    }

    console.log(album, 'log del product detail view');
    return (
        <>
            <DetailContent album={album} />
            <TrackList tracks={album.tracks} />
            <Recommendation currentAlbumId={album.id} artistName={album.artist.name} />
        </>
    )
};

export default ProductDetailView;
import { useQueries } from '@tanstack/react-query';
import { handpickedAlbumIds } from '@/shared/data/handpickedAlbumsId';
import { getAlbumById } from '../api/handpicked.service';
import { getRandomPrice } from '@/shared/utils/getRandomPrice';

export const useHandpickedAlbums = () => {
    const queries = useQueries({
        queries: handpickedAlbumIds.map((id) => ({
            queryKey: ["album", id],
            queryFn: () => getAlbumById(id),
        })),
    });

    queries.forEach(q => {
        if (q.isError) {
            console.log("Album error:", q.error);
        }
    });

    return queries.filter(q => q.isSuccess && !q.isError)
        .map(q => q.data);
};
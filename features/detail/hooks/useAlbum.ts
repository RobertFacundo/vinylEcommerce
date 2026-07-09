import { useQuery } from "@tanstack/react-query";
import { getAlbumById } from "../api/album.service";

export const useAlbum = (id: string) => {
    return useQuery({
        queryKey: ["album", id],
        queryFn: () => getAlbumById(Number(id)),
        enabled: !!id,
    });
}
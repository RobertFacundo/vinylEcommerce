import { useQuery } from "@tanstack/react-query";
import { getRecommendations } from "../api/recommendations.service";

export const useRecommendations = (
    artistName:string,
    currentAlbumId:number
) => {

    return useQuery({
        queryKey:[
            "recommendations",
            artistName,
            currentAlbumId
        ],
        queryFn:()=> 
            getRecommendations(
                artistName,
                currentAlbumId
            ),
        enabled:!!artistName
    });
};
import type { MoivieListResponse } from "@/types/movie.types"
import type { IMovieService } from "../interfaces/IMovieService"

export class MovieService implements IMovieService {
    async getPopularMovies(): Promise<MoivieListResponse> {
        const response = await fetch("/api/movies/popular")
        if (!response.ok) throw new Error("Error fetching popular movies")
        return response.json()
    }
}

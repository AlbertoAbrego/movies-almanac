import type { MoivieListResponse } from "@/types/movie.types"

export interface IMovieService {
    getPopularMovies(): Promise<MoivieListResponse>
}

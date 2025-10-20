import { useDependencies } from "@/context/DependencyContext"
import type { Movie } from "@/types/movie.types"

export function useMovies() {
    const { movieService } = useDependencies()

    const getPopularMovies = async (): Promise<Movie[]> => {
        const data = await movieService.getPopularMovies()
        return data.results
    }

    return { getPopularMovies }
}

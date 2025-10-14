import type { IMovieService } from "../interfaces/IMovieService"

export class MovieService implements IMovieService {
    async searchMovies(query: string) {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}`
        )
        const data = await response.json()
        return data.results
    }
}

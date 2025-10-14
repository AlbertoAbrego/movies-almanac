export interface IMovieService {
    searchMovies(query: string): Promise<[]>
}

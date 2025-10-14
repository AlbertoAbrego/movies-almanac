import { useDependencies } from "@/context/DependencyContext"
import { useEffect, useState } from "react"

export function useMovies(query: string) {
    const { movieService } = useDependencies()
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!query) return
        setLoading(true)
        movieService.searchMovies(query).then((results) => {
            setMovies(results)
            setLoading(false)
        })
    }, [query])

    return { movies, loading }
}

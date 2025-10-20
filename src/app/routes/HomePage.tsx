import { useEffect, useState } from "react"
import { MainLayout } from "../layout/MainLayout"
import { useMovies } from "../hooks/useMovies"
import { useSeries } from "../hooks/useSeries"
import { usePeople } from "../hooks/usePeople"
import { Carousel } from "@/components/Carousel"
import type { Movie } from "@/types/movie.types"
import type { Serie } from "@/types/serie.types"
import type { People } from "@/types/people.types"

export const HomePage: React.FC = () => {
    const { getPopularMovies } = useMovies()
    const { getPopularSeries } = useSeries()
    const { getPopularPeople } = usePeople()
    const [movies, setMovies] = useState<Movie[]>([])
    const [series, setSeries] = useState<Serie[]>([])
    const [people, setPeople] = useState<People[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPopularMovies().then(setMovies).catch(console.error)
        getPopularSeries().then(setSeries).catch(console.error)
        getPopularPeople()
            .then(setPeople)
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])
    if (loading) return <p>Loading movies...</p>
    return (
        <>
            <MainLayout>
                <div className="justify-items-center">
                    <Carousel
                        title="Popular Movies"
                        items={movies}
                        imageKey="poster_path"
                        labelKey="title"
                    />
                    <Carousel
                        title="Popular Series"
                        items={series}
                        imageKey="poster_path"
                        labelKey="name"
                    />
                    <Carousel
                        title="Popular people"
                        items={people}
                        imageKey="profile_path"
                        labelKey="name"
                    />
                </div>
            </MainLayout>
        </>
    )
}

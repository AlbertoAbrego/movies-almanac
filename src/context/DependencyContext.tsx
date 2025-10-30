import { createContext, useContext } from "react"
import { MovieService } from "@/services/implementations/MovieService"
import { SerieService } from "@/services/implementations/SerieService"
import { PeopleService } from "@/services/implementations/PeopleService"
import { SearchService } from "@/services/implementations/SearchService"
import type { IMovieService } from "@/services/interfaces/IMovieService"
import type { ISerieService } from "@/services/interfaces/ISerieService"
import type { IPeopleService } from "@/services/interfaces/IPeopleService"
import type { ISearchService } from "@/services/interfaces/ISearchService"

interface Dependencies {
    movieService: IMovieService
    serieService: ISerieService
    searchService: ISearchService
    peopleService: IPeopleService
}

const dependencies: Dependencies = {
    movieService: new MovieService(),
    serieService: new SerieService(),
    searchService: new SearchService(),
    peopleService: new PeopleService(),
}

const DependencyContext = createContext<Dependencies>(dependencies)
export const useDependencies = () => useContext(DependencyContext)

export const DependencyProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <DependencyContext.Provider value={dependencies}>
            {children}
        </DependencyContext.Provider>
    )
}

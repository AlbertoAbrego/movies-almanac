import { createContext, useContext } from "react"
import { MovieService } from "@/services/implementations/MovieService"
import type { IMovieService } from "@/services/interfaces/IMovieService"

interface Dependencies {
    movieService: IMovieService
}

const dependencies: Dependencies = {
    movieService: new MovieService(),
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

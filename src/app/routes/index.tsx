import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { SearchResults } from "./SearchResults"
import { Movies } from "./Movies"
import { Series } from "./Series"
import { People } from "./People"

export const IndexRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/people" element={<People />} />
        </Routes>
    )
}

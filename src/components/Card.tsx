interface CardProps {
    title: string
    imgURL: string
    date: string
}

export const Card = ({ title, imgURL, date = "" }: CardProps) => {
    const year = date !== "" ? date.substring(0, 4) : date
    const imageBaseURL = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="max-w-sm max-h-sm  bg-gray-800 border-2 border-gray-500 rounded-lg transition-transform duration-300 hover:scale-105">
            <img
                src={`${imageBaseURL}${imgURL}`}
                className="rounded-t-lg shadow-md"
            />
            <div className="p-2">
                <h5 className="text-gray-200">{`${title}, ${year}`}</h5>
            </div>
        </div>
    )
}

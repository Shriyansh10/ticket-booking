import MovieContext from "./MovieContext";

const MovieState = (props)=>{
    const movie_details = [
        {
            "name": "Avengers: Endgame",
            "threatre": "INOX",
            "language": "English",
            "price": "200"
        },
        {
            "name": "URI: The Surgical Strike",
            "threatre": "PVR",
            "language": "Hindi",
            "price": "200"
        },
        {
            "name": "KGF: Chapter 1",
            "threatre": "CinePolis",
            "language": "Kannada",
            "price": "200"
        },
        {
            "name": "Master",
            "threatre": "PVR",
            "language": "Tamil",
            "price": "200"
        },
        {
            "name": "Bahubali: The Beginning",
            "threatre": "INOX",
            "language": "Telugu",
            "price": "200"
        },

    ]
    return(
        <MovieContext.Provider value={movie_details}>{props.children}</MovieContext.Provider>
    );
}

export default MovieState;
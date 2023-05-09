import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component{

    render(){

        //const {title,plot,price,rating,stars,fav,isInCart,poster} = this.state.movies; 

        //we have access to movies from this.state so we can destructure here
        //const {movies} = this.state;

        const {movies,addStars,decStars,toggleFav,toggleCart} = this.props;
        return(
            <>
            
            {movies.map((movie) => <MovieCard movies = {movie} //passing directly the object as props
                    addStars = {addStars}  //it will go as a prop to my child
                    decStars = {decStars}
                    toggleFav = {toggleFav}
                    toggleCart = {toggleCart}
                    
                    />)}
            
            </>

        )
            
    }
}

export default MovieList;
import React from "react";
import MovieList from "./MovieList";
import './index.css';
import Navbar from "./Navbar";
import { movies } from "./moviesData";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        movies : movies,
        cartCount: 0
    }
    //this.addStars = this.addStars.bind(this); now binding not required as now we used arrow functions
}

handleIncStar = (movie) => {

    const {movies} = this.state;
    const mid = movies.indexOf(movie);  // index of movie which we are getting from child
    
    if(movies[mid].stars >=5){
        return;
    } 
    movies[mid].stars +=0.5

    this.setState({
        movies: movies //movies = is the state: movies = is the one which i have changed
    })
}
handleDecStars = (movie) =>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);  // index of movie which we are getting from child
    
    if(movies[mid].stars <=0){
        return;
    } 
    movies[mid].stars -=0.5

    this.setState({
        movies: movies //movies = is the state: movies = is the one which i have changed
    })
}

handleToggleFav =(movie) =>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav

    this.setState({
        movies
    })
}

handleToggleCart = (movie) => {
    let {movies,cartCount} = this.state;
    const mid = movies.indexOf(movie);;
    movies[mid].isInCart = !movies[mid].isInCart;
    console.log(movies[mid].isInCart)

    if(movies[mid].isInCart){
        cartCount = cartCount+1
    }
    else{
        cartCount -= 1
    }

    this.setState({
        movies,
        cartCount
    })

    console.log(cartCount)

}

  render(){

    const{movies,cartCount} = this.state;

  return (
    <>
    <Navbar cartCount = {cartCount}/>
    <MovieList movies = {movies}
              addStars = {this.handleIncStar}
              decStars = {this.handleDecStars}
              toggleFav = {this.handleToggleFav}
              toggleCart = {this.handleToggleCart}/>
    </>
  );
}
}
export default App;

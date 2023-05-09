
function MovieCard(props){

    //console.log(this.props);
        const {movies,addStars,decStars,toggleFav,toggleCart} = props;

        const {title,plot,poster,price,rating,stars,fav,isInCart} = props.movies;

        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img alt="Poster" src={poster}/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}.</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn" alt="decrease" src="https://www.shutterstock.com/image-vector/thumbs-down-unlike-icon-vector-600w-1456124162.jpg"
                                onClick = {() => {decStars(movies)}}/>

                                <img alt="star" src="https://img.icons8.com/?size=2x&id=qdQpy48X3Rjv&format=png" className="stars"/>

                                <img className="str-btn" alt="increase" src="https://www.shutterstock.com/image-vector/hand-thumb-icon-flat-illustration-600w-533859025.jpg"
                                onClick = {()=> {addStars(movies)}}/>

                                <span className="starCount">{stars}</span>

                            </div>

                            {/*{fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button>: <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                            <button className= {fav?"unfavourite-btn": "favourite-btn"}
                            onClick = {()=>{toggleFav(movies)}}>{fav?"Unfavourite": "Favourite"}</button>


                            <button className= {isInCart?"unfavourite-btn": "cart-btn"}
                            onClick = {()=>{toggleCart(movies)}}>{isInCart?"Remove from Cart": "Add to Cart"}</button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }


export default MovieCard;
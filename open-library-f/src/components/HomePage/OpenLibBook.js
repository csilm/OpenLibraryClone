function OpenLibBook(props){
    return(
        <div className="bookCard w-25 d-flex justify-content-start align-items-center">
            <div>
                <img src={props.imageUrl} alt={props.name} className="cardImage"/>
            </div>
            <div className="booksDesc ms-2 me-2">
                <h5 className="bookTitle text-start">{props.title}</h5>
                <p className="bookBody text-start">{props.bbody}</p>
            </div>
            
        </div>
    );
}

export default OpenLibBook;
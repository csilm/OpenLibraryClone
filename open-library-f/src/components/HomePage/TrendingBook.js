function TrendingBook(props) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="trendBook">
                <img src={props.imageUrl} alt="book_title" className="img-fluid float-start" />
            </div>
            <div className="trendBtn my-3">
                   <button href="#action1" className={props.btnStyle}>
                    {props.status}
                </button>
                
            </div>

        </div>
    );
}

export default TrendingBook;
function Card(props){    
    console.log(typeof props);
    return(    
        <div className="col s2">
            <div className="card hoverable small">
                <div className="card-image">
                    <img src={props.data.image}></img>
                </div>
                <div className="card-content">
                    <p>{props.data.course}</p>
                    <p>{props.data.instructor}</p>
                </div>
                <div className="card-action">
                    <a href="#">$9.99</a>
                </div>
            </div>
        </div>   
    )
}
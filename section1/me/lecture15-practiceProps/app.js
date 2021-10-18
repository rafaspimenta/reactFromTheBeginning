var cards = data.map((course, i) => (<Card key={i} data ={course}/>));

ReactDOM.render(
    <div className="row">
        {console.log(cards)}
        {cards}
    </div>
    ,
    document.getElementById('root')
)
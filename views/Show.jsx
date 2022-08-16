const React = require('react')

// Font Styling
const myStyle = {
  color: '##ffcc00',
  backgroundColor: '#d9d9d9',
  fontSize: '15px',
}

// Background Styling
const myStyle2 = {
  display: "flex",
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'flexStart',
  flexDirection: 'column',
  height: '100vh',
}

const horzLine = {
    backGround: 'black',
    color: 'black',
    borderColor: 'white',
    height: '5px',
    size: '20px',
    width: "1000px",
}

class Show extends React.Component {
    render(){
        const gameConsoles = this.props.gameconsole
        let btn;
        let stock;
        if(gameConsoles.stock == 0){ 
            btn = null;
            stock = 'outofstock';
        } else {
            btn = <button className='btn'>Buy</button>
            stock = gameConsoles.stock
        }
        
            return(
                <html>
                <head>
                <title>Gamers-HQ</title>
                <link rel="stylesheet" href="/css/app.css"></link>
                </head>
                <body>
                    <div className='body1'>
                        <hr style = {{...horzLine}}/>
                        <h1> Free shipping on orders over $49 </h1><br/>
                        <h2> {gameConsoles.name.charAt(0).toUpperCase() + gameConsoles.name.slice(1)} </h2>
                        <hr style = {{...horzLine}}/>
                        {/* <h3>{gameConsoles.image}</h3> */}
                        <img src={gameConsoles.image}/>
                        <h3 className='description'>
                            {/* {gameConsoles.brand} */}
                            {gameConsoles.description}<br/>
                            {stock}<br/>
                            {gameConsoles.price}
                        </h3>
                        { btn }
                        <br/>
                        <form action={`/api/vi/gameConsoles/${gameConsoles.id}?_method=DELETE`} method='POST'><button type="submit" className='btn'>Delete</button>
                        </form>
                        <br/>
                        <a href={`/api/vi/gameConsoles/${gameConsoles.id}/edit`}><button className='btn'>Edit Game Console</button></a>
                        <br/>
                        <a href="/api/vi/gameconsoles"><button className='btn'><h4>Back to Main Directory!</h4></button></a>
                    </div>   
                </body>
                </html>
        )
    }
}

module.exports = Show

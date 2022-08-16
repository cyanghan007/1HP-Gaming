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
                    <header className='nav'>
                        <nav className='nav_links'>
                            <ion-icon name="game-controller-sharp" size='large'></ion-icon>
                            <a class="active" href='/api/vi/Gamers-HQ'>Home</a>
                            <a href='/api/vi/gameconsoles/'>Consoles</a>
                            <a href='https://www.linkedin.com/in/chan-yang123/' target='_blank'>Contact</a>
                        </nav>  
                    </header><br/>
                    <div className='body'>
                        <hr style = {{...horzLine}}/><br/>
                        <h1> Free Shipping on Orders Over $49 </h1><br/>
                        <h2> {gameConsoles.name.charAt(0).toUpperCase() + gameConsoles.name.slice(1)} </h2><br/>
                        <hr style = {{...horzLine}}/><br/>
                        {/* <h3>{gameConsoles.image}</h3> */}
                        <img src={gameConsoles.image}/>
                        <h3>
                            {/* {gameConsoles.brand} */}
                            {gameConsoles.description}<br/>
                            {stock}<br/>
                            {gameConsoles.price}
                        </h3><br/>
                        { btn }
                        
                        <form action={`/api/vi/gameConsoles/${gameConsoles.id}?_method=DELETE`} method='POST'><button type="submit" className='btn'>Delete</button>
                        </form>
                        
                        <a href={`/api/vi/gameConsoles/${gameConsoles.id}/edit`}><button className='btn'>Edit Game Console</button></a>
                        
                        <a href="/api/vi/gameconsoles"><button className='btn'><h4>Back to Main Directory!</h4></button></a>
                    </div>   
                </body>
                </html>
        )
    }
}

module.exports = Show

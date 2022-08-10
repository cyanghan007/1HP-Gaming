const React = require('react')

// Font Styling
const myStyle = {
  color: '##ffcc00',
  backgroundColor: '#d9d9d9',
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
        console.log(gameConsoles)
            return(
                <html>
                <head>
                <title>Gamers-HQ</title>
                </head>
                <body>
                    <div style = {{...myStyle,...myStyle2}}>
                        <hr style = {{...horzLine}}/>
                        <h1> Gamers-HQ </h1><br/>
                        <h2> {gameConsoles.name.charAt(0).toUpperCase() + gameConsoles.name.slice(1)} </h2>
                        {/* <h3>{gameConsoles.image}</h3>
                        <img src={gameConsoles.image}> </img> */}
                        <h4>
                            {/* {gameConsoles.brand} */}
                            {gameConsoles.description}
                            {gameConsoles.stock}
                            {gameConsoles.price}
                        </h4>
                        <hr style = {{...horzLine}}/>
                        <a href="/api/vi/gameconsoles"><button><h5>Back to Main Directory!</h5></button></a>
                    </div>   
                </body>
                </html>
        )
    }
}

module.exports = Show

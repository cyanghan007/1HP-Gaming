const React = require('react');
const gameConsoles = require('../models/gameConsoles')

const horzLine = {
  borderColor: 'white',
  height: '5px',
  size: '20px',
  width: "1000px",
}
  
class Index extends React.Component {
  render() {
    const { gameconsoles } = this.props
      return (
        <html>
          <head>
          <link rel="stylesheet" href="/css/app.css"></link>
          </head>
          <body>
            <div className='container'>
            <hr style = {{...horzLine}}/> 
            <h1> Available game consoles </h1>
            <h2> Select a game console to view </h2>
            <hr style = {{...horzLine}}/>
            <h3 className='h3'> 
              {gameconsoles.map((gameConsoles) => {
                return (
                    <a href={`/api/vi/gameconsoles/${gameConsoles.id}`}>
                      {/* {gameConsoles.name.charAt(0).toUpperCase() + gameConsoles.name.slice(1)} */}
                      <img src={gameConsoles.image} width="200" height="150"/>
                    </a>
                      )
                    })}
                    </h3> 
                    <nav>
                      <a href="/api/vi/gameConsoles/new">
                        <button className='btn'>Add a console to inventory</button>
                      </a>
                    </nav>  
              </div>
          </body>
        </html>       
    )
  }
}
  
module.exports = Index
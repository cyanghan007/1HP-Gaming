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
            <header className='nav'>
                  <nav className='nav_links'>
                    <ion-icon name="game-controller-sharp" size='large'></ion-icon>
                    <a class="active" href='/api/vi/Gamers-HQ'>Home</a>
                    <a href='/api/vi/gameconsoles/'>Consoles</a>
                    <a href='https://www.linkedin.com/in/chan-yang123/' target='_blank'>Contact</a>
                  </nav>  
              </header><br/>
            <div className="body">
              <hr style = {{...horzLine}}/><br/>
              <h1 className='h1index'> Available game consoles </h1><br/>
              <h2 className='h2index'> Select a game console to view </h2><br/>
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
              <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
              <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
          </body>
        </html>       
    )
  }
}
  
module.exports = Index
const React = require('react');
const gameConsoles = require('../models/gameConsoles')

const myStyle = {
    color: '#F0FF33',
    backgroundImage: "url('https://wallpapercave.com/wp/wp2250916.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no repeat",
    height: "100vh"
  }
  
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
  
class Index extends React.Component {
  render() {
    const { gameconsoles } = this.props
    console.log(gameconsoles)
      return (
        <div style = {{...myStyle,...myStyle2}}>
          <hr style = {{...horzLine}}/> 
          <h1>Avaiable Game Consoles</h1>
          <h2>Select a game console to View</h2>
          <hr style = {{...horzLine}}/> 
            <ul>
              {gameconsoles.map((gameConsoles) => {
                console.log(gameConsoles)
                return (
                  <li>
                    <a href={`/api/vi/gameconsoles/${gameConsoles.id}`}>
                      {gameConsoles.name.charAt(0).toUpperCase() + gameConsoles.name.slice(1)}
                      <form action={`/api/vi/gameConsoles/${gameConsoles.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button>
                      </form>
                      <a href={`/api/vi/gameConsoles/${gameConsoles.id}/edit`}>Edit Game Console</a>
                      </a>
                  </li>
                      )
                    })}
                    </ul>
                    <nav>
                      <a href="/api/vi/gameConsoles/new">
                        <button>Add a Console to Inventory</button>
                      </a>
                    </nav>  
         </div>        
    )
  }
}
  
module.exports = Index
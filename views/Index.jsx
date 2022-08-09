const React = require('react');
const gameConsoles = require('../models/gameConsoles')

const myStyle = {
    color: '#F0FF33',
    backgroundImage: "url('https://media.lrng.org/52/78/721b149cc7e648344428446b8f50d3d19403-1131x707.jpg')",
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
  
      class Index extends React.Component {
        render() {
          const { gameconsoles } = this.props
            return (
              <div style = {{...myStyle,...myStyle2}}> 
                  <h1>Old Gen Classics</h1>
                  <h2>Select a game console to view</h2>
                    <ul>
                      {gameconsoles.map((gameConsoles) => {
                        return (
                          <li>
                            <a href={`/api/vi/gameConsoles/${gameConsoles.id}`}>
                              {gameConsoles.name.charAt(0).toUpperCase() + gameConsoles.name.slice(1)}
                              {gameConsoles.name}
                              {gameConsoles.description}
                              {gameConsoles.stock}
                              {gameConsoles.price}
                              <form action={`/api/vi/gameConsoles/${gameConsoles.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button>
                              </form>
                              <a href={`/api/vi/gameConsoles/${gameConsoles.id}/edit`}>Edit pokemon</a>
                            </a>
                          </li>
                      )
                    })}
                    </ul>
                    <nav>
                      <a href="/api/vi/gamingConsoles/new">
                        <button>Add new game to Inventory</button>
                      </a>
                    </nav>  
              </div>    
              
            )
        }
      }
  
      module.exports = Index
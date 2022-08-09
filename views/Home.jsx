const React = require('react')
const gameconsole = require('../models/gameConsoles')

const myStyle = {
    color: '#F0FF33',
    backgroundImage: "url('https://cdn.wallpapersafari.com/0/71/pB3goh.jpg')",
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
}

const horzLine = {
    backGround: 'red',
    color: 'red',
    borderColor: 'red',
    height: '5px',
    size: '20px',
    width: "1000px",
}


class Home extends React.Component {
    render() {
        const { gameConsoles } = this.props
        console.log(gameConsoles)
            return(    
                <div style={{...myStyle,...myStyle2 }}>
                    {/* <hr style={{horzLine}}/> */}
                    <h1>Welcome to Gamers-HQ</h1><br/>
                    <h2>Click Controller to View</h2><br/>
                    {/* <hr style={{horzLine}}/><br/> */}
                    <a href="/api/vi/gameconsoles/">
                      <img src="/images/controller.gif"></img>
                    </a>
                    {/* <ul>
                      {gameconsoles.map((gameconsole) => {
                        return (
                          <li>
                            <a href={`/api/vi/gameconsoles/${gameconsole.id}`}>
                                {gameconsole.name}
                            </a>    
                          <a href="/api/vi/gameconsoles/">
                            <img src="https://simg.nicepng.com/png/small/21-218635_nintendo-logo-white-png-metal.png"></img>
                          </a>
                          <br/>
                          <a href="/api/vi/gameconsoles/"><button>Click</button></a>
                          </li>
                        )
                      })}
                    </ul>                  */}
                </div>     
              )
        }
}

module.exports = Home
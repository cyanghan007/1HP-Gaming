const React = require('react')
// const GameConsoles = require('../models/gameconsoles')

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

class Home extends React.Component {
    render() {
        const { gameconsoles } = this.props
            return(    
                <div style={{...myStyle,...myStyle2 }}>
                    <hr></hr>
                    <h1>Welcome to Gamers-HQ</h1><br/>
                    <h2>Select a Brand to view</h2><br/>
                    <hr></hr>
                    {/* <ul>
                      {gameconsoles.map((gameconsole) => {
                        return (
                          <li>
                            <a href={`/api/vi/nintendo/${gameconsole.id}`}>
                                {gameconsole.name}
                            </a>
                      
                        <a href="/api/vi/nintendo/">
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
    };
};

module.exports = Home;
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
            return(    
                <div style={{...myStyle,...myStyle2 }}>
                    {/* <hr style={{horzLine}}/> */}
                    <h1>Welcome to Gamers-HQ</h1><br/>
                    <h2>Click Image to View Consoles</h2><br/>
                    {/* <hr style={{horzLine}}/><br/> */}
                    <a href="/api/vi/gameconsoles/">
                      <img src="/images/controller.gif"></img>
                    </a>
                </div>     
              )
        }
}

module.exports = Home
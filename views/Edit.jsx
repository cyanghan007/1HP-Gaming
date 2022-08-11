const React = require('react')

const myStyle = {
    color: '#ffcc00',
    backgroundColor: '#991f00',
    backgroundImage: "url('https://i.pinimg.com/736x/21/24/a8/2124a84f6b5f622a2b772f5977d00636--video-game-console-video-games.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no repeat",
    height: "100vh",
    fontSize: '1.2em'
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
    borderColor: 'white',
    height: '5px',
    size: '20px',
    width: "1000px",
}

class Edit extends React.Component {
    render() {
        const gameConsoles = this.props.gameconsole
        return (
            <div style={{...myStyle,...myStyle2}}>
                <hr style={{...horzLine}}/>
                <h1>Edit game console</h1>
                <hr style={{...horzLine}}/>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action={`/api/vi/gameconsoles/${gameConsoles.id}?_method=PUT`} method="POST">
                  Name: <input type="text" name="name" /><br/><br/>
                  Image: <input type="text" name="image" /><br/><br/>
                  {/* Brand: <input type="text" name="img" /><br/><br/> */}
                  Description: <input type="text" name="description" /><br/><br/>
                  Stock: <input type="text" name="stock" /><br/><br/>
                  Price: <input type="text" name="price" /><br/><br/>
                  <input type="submit" name="" value="Add Edited Game Console to Inventory"/>
                  <br/>
                  {/* <br/>
                  <img src="https://i.imgur.com/jQCyhH0.gif"></img> */}
                </form>
            </div>)
        }
      }
 
module.exports = Edit
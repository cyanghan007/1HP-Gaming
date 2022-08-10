const React = require('react')

const myStyle = {
    color: '#ffcc00',
    backgroundColor: '#991f00',
    fontSize: '1.3em',
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
    backGround: 'red',
    color: 'red',
    borderColor: 'red',
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
                <h1>Edit Game Console</h1>
                <hr style={{...horzLine}}/>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action={`/api/vi/gameconoles${gameConsoles.id}?_method=PUT`} method="POST">
                  Name: <input type="text" name="name" /><br/><br/>
                  Image: <input type="text" name="img" /><br/><br/>
                  Brand: <input type="text" name="img" /><br/><br/>
                  Description: <input type="text" name="img" /><br/><br/>
                  Stock: <input type="text" name="img" /><br/><br/>
                  Price: <input type="text" name="img" /><br/><br/>
                  <input type="submit" name="" value="Edit Game Console in Inventory"/>
                  <br/>
                  {/* <br/>
                  <img src="https://i.imgur.com/jQCyhH0.gif"></img> */}
                </form>
            </div>)
        }
      }
 
module.exports = Edit
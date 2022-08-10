const React = require('react')

const myStyle = {
    color: '#F0FF33',
    backgroundImage: "url('https://wallpaperaccess.com/full/1560264.jpg')",
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
    borderColor: 'blue',
    height: '5px',
    size: '20px',
    width: "1000px",
}

class New extends React.Component {
    render() {
        return (
            <div style = {{...myStyle,...myStyle2}}>
                <hr style = {{...horzLine}}/>
                <h1>What's New?</h1>
                <hr style = {{...horzLine}}/>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action="/api/vi/gameconsoles/" method="POST">
                  Name: <input type="text" name="name" /><br/><br/>
                  Image: <input type="text" name="img" /><br/><br/>
                  Brand: <input type="text" name="name" /><br/><br/>
                  Description: <input type="text" name="name" /><br/><br/>
                  Stock: <input type="text" name="name" /><br/><br/>
                  Price: <input type="text" name="name" /><br/><br/>
                  <input type="submit" name="" value="Add Game Console to Invetory"/>
                  <br/>
                  {/* <br/>
                  <img src="https://i.imgur.com/jQCyhH0.gif"></img> */}
                </form>
            </div>)
        }
      }
 
module.exports = New
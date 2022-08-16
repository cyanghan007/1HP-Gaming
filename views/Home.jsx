const React = require('react')
const gameconsole = require('../models/gameConsoles')

class Home extends React.Component {
    render() {
        const { gameConsoles } = this.props
            return(
                <html>
                    <head>
                    <link rel="stylesheet" href="/css/app.css"></link>
                    </head>
                    <body>
                        <div className='body'>
                            <h1>Welcome to Gamers-HQ</h1><br/>
                            <h2>Order today and recieve 10% off first purchase</h2>
                            <h3>Click image to see what's hot today</h3><br/>
                            <a href="/api/vi/gameconsoles/">
                                <img src="/images/controller.gif"></img>
                            </a>
                        </div>
                    </body>   
                </html>       
              )
        }
}

module.exports = Home
const React = require('react')

const horzLine = {
    borderColor: 'blue',
    height: '5px',
    size: '20px',
    width: "1000px",
}

class New extends React.Component {
    render() {
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
                    <div className='container'>
                    <hr style = {{...horzLine}}/><br/>
                    <h1>What's New?</h1><br/>
                <hr style = {{...horzLine}}/><br/>
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    <form action="/api/vi/gameconsoles/" method="POST">
                        Name: <input type="text" name="name" /><br/><br/>
                        Image: <input type="text" name="img" /><br/><br/>
                    {/* Brand: <input type="text" name="name" /><br/><br/> */}
                        Description: <input type="text" name="name" /><br/><br/>
                        Stock: <input type="text" name="name" /><br/><br/>
                        Price: <input type="text" name="name" /><br/><br/>
                    <input type="submit" name="" value="Add Game Console to Invetory"/>
                    <br/>
                    {/* <br/>
                    <img src="https://i.imgur.com/jQCyhH0.gif"></img> */}
                    </form>
                    </div>
                </body>
            </html>
        )
    }
}
 
module.exports = New
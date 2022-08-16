const React = require('react')

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
                        <hr style={{...horzLine}}/><br/>
                        <h1>Edit game console</h1><br/>
                        <hr style={{...horzLine}}/><br/>
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
                    </div>
                </body>
            </html>
        )
    }
}
 
module.exports = Edit
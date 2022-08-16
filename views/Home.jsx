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
                        <header className='nav'>
                            <nav className='nav_links'>
                                <ion-icon name="game-controller-sharp" size='large'></ion-icon>
                                <a class="active" href='/api/vi/Gamers-HQ'>Home</a>
                                <a href='/api/vi/gameconsoles/'>Consoles</a>
                                <a href='https://www.linkedin.com/in/chan-yang123/' target='_blank'>Contact</a>
                            </nav>
                        </header><br/>
                        <nav className='body'>
                            <h1> Welcome to Gamers-HQ </h1><br/>
                            <h2>Order today and recieve 10% off first purchase</h2><br/>
                            <h3>Todays Hot Items!</h3><br/>
                            <br/>
                            <h4>
                                <img src='https://i.ytimg.com/vi/DKBK4OnvjX0/maxresdefault.jpg' width='200' height='125'/>
                                <img src='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/b/AmazonStores/ATVPDKIKX0DER/57b0ef7d3f89c29c0c679bf79ba37eb8.w3000.h1500.jpg' width='200' height='125'/>
                                <img src='https://helios-i.mashable.com/imagery/articles/05KssmGG3w3JoGXRM61lxIt/hero-image.fill.size_1248x702.v1657639878.png' width='200' height='125'/>     
                            </h4>
                        </nav>
                        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                    </body>   
                </html>       
              )
        }
}

module.exports = Home
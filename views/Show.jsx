const React = require('react')

// Font Styling
const myStyle = {
  color: '##ffcc00',
  backgroundColor: '#d9d9d9',
}

// Background Styling
const myStyle2 = {
  display: "flex",
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'flexStart',
  flexDirection: 'column',
  height: '100vh',
}

class Show extends React.Component {
    render(){
        return(
            <html>
            <head>
                <title>Gamers-HQ</title>
            </head>
            <body>
                <h1>Gamers-HQ</h1><br/>
                <h2>Click a Game Console to view!</h2>
                <a href="/"><button><h3>Back to Main Directory!</h3></button></a><br/>
            </body>
            </html>
        )
    }
}

module.exports = Show


// const button = {
//   borderRadius: '25px',
//   backgroundColor: '#FFCC00',
// }
//     class Show extends React.Component {
//       render() {
//         const gamingconsole = this.props
//           return (
//                   <div style = {{...myStyle,...myStyle2}}>
//                       <h1> "1HP-Gaming" </h1>
//                       <h2> {gamingconsole.name.charAt(0).toUpperCase() + gamingconsole.name.slice(1)}</h2>
//                       <img src={gamingconsole.img}></img>
//                       <br/>
//                       <a href={/console/}>
//                         <button>Back</button>
//                       </a>  
//                   </div>
//           )
//       }
//     }

// module.exports = Show
const React = require('react');
const console = require('../models/consoles')


class Index extends React.Component {
    render() {
        const { console } = this.props
            return(    
                <div>
                    <h1>Nentindo</h1><br/>
                    <h2>Select a console to view
                    <a href={/consoles/}>
                        <button>Back</button>
                    </a></h2> 
                    <ul>
                        {console.map((console) => {
                            return(
                                <li>
                                    <a href={`/consoles/${console}`}></a>
                                    <form action={`/consoles/${console.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button>
                                    </form>
                                    <a href={`/console/${console.id}/edit`}>Edit console</a>   
                                </li>
                        )})}
                    </ul>
                </div>     
        )
    };
};

module.exports = Index;
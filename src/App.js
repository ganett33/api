import React, {Component} from 'react';
import Contacts from "./Contacts.js";
class App extends Component
{
render()
{
    return(<Contacts contacts={this.state.contacts} />);
} 

state = { contacts: [] }

componentDidMount()
    {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(
        (data) => {this.setState({contacts: data})}
        )
        .catch(console.log);
        } // end componentDidMoun
}



export default App;
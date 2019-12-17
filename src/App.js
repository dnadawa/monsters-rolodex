import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";


class App extends Component {

    constructor() {
        super();

        this.state = {
            monstor:[],
            search:''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users => this.setState({monstor:users}));
    }

    handlechange = e =>{
        this.setState({search:e.target.value});
    };


    render() {

        const monsters = this.state.monstor;
        const search = this.state.search;

        const filtered_monsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(search.toLowerCase()));

        return (<div className="App">
            <header className="App-header">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='Search Monsters' handleEvent={this.handlechange}/>

                <CardList monstor={filtered_monsters}/>

            </header>
        </div>
        );
    }
}


export default App;

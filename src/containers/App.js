import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
constructor(){
    super();

    this.state = {
        robots: [],
        searchfield: ''
    }
    }


    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => this.setState({robots:result}));
    }

    onSearchChange = (event)=>{
        console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    }




    render(){
        const {robots, searchfield} = this.state;

        const filteredRobots = robots.filter(e =>{
            return e.name.toLowerCase().includes(searchfield.toLowerCase());
        });


        if(!robots.length)
            return <h1>LOADING</h1>;
        else{
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
        }
    }
}


export default App;
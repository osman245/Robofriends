import React,{Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';


class App extends Component {//component to use render()
	constructor(){
		super()
		this.state = {
       robots:[],
	   searchfield:''
		}
		console.log('constructor');
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}));
	

}


	

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value})
      }

render() {
	const filteredRobots = this.state.robots.filter(robots => {
			 return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	if(this.state.robots.length === 0) {
		return <h1>loading</h1>
	} else {
	return (
	<div className='tc'>
	
	<h1 className='f1'>RoboFriends</h1>
	
	<SearchBox searchChange={this.onSearchChange}/>
	
   <CardList robots={filteredRobots}/>
   
  
</div>
	);

}
}
}

export default App;



import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
	const {robots,searchfield} = this.state;
	const filteredRobots = robots.filter(robot => {
			 return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
	return !robots.length ?
	<h1>loading</h1> :
	(
	
	<div className='tc'>
	
	<h1 className='f1'>RoboFriendss</h1>
	
	<SearchBox searchChange={this.onSearchChange}/>
	
	<Scroll>
   <CardList robots={filteredRobots}/>
   </Scroll>
  
</div>
	);

}
}
}

export default App;



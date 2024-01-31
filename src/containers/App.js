import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import '../containers/App.css';

import { setSearchField, requestRobots } from '../slice';

function App() {
	const searchField = useSelector((state) => state.searchRobots.searchField);
	const robots = useSelector((state) => state.requestRobots.robots);
	const isPending = useSelector((state) => state.requestRobots.isPending);
	const dispatch = useDispatch();

	const onSearchChange = (event) => {
		dispatch(setSearchField(event.target.value));
	}

	useEffect(() => {
		dispatch(requestRobots());
	}, []);

	const filterRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase())
	});

	return (isPending)  
			?
			<h1>Loading...</h1> 
			:
			(
				<div className='tc'>
					<h1 className='f1'>My RobotFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filterRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
} 

export default App;
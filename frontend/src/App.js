import React from 'react';
import './App.css';
import EventList from './components/EventList';
import CustomNavbar from './components/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<div className="App">
			<CustomNavbar />
			<h1>A React Django App</h1>
			<EventList />
		</div>
	);
}

export default App;

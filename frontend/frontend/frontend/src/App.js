import React from 'react';
import './App.css';
import Article from './components/Article';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>A React Django App</p>
				<Article />
			</header>
		</div>
	);
}

export default App;

import React, { Component } from 'react';
import '../style/EventList.css';
export default class EventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: 'placeholder',
					type: 'placeholder',
					start_date: 'placeholder'
				}
			]
		};
	}

	componentDidMount() {
		this.fetchEvents();
	}

	fetchEvents = () => {
		fetch('http://localhost:8000/api/events.json')
			.then(response => {
				return response.json();
			})
			.then(myJson => {
				const article_info = myJson;
				// console.table(article_info);
				this.setState({
					data: article_info
				});
			});
	};

	render() {
		const listItems = this.state.data.map(event => (
			<ul>
				<li>{event.name}</li>
				<li>{event.type}</li>
				<li>{event.start_date}</li>
				<br></br>
			</ul>
		));

		return (
			<div>
				<h3 className="title">Event List</h3>
				<ul className="eventList">{listItems}</ul>
			</div>
		);
	}
}

import React, { Component } from 'react';

class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: 'placeholder',
					created_at: null,
					message: 'placeholder'
				}
			]
		};
	}

	render() {
		let article_info = [
			{
				title: 'placeholder'
			}
		];
		fetch('http://localhost:8000/api/articles.json')
			.then(response => {
				return response.json();
			})
			.then(myJson => {
				article_info = myJson;
				this.setState({
					data: myJson
				});
			});

		// if (article_info.length > 0) {
		// } else {
		// 	article_info = [
		// 		{
		// 			title: 'placeholder'
		// 		}
		// 	];
		// }
		const today = Date();
		let events = [];
		class MonthlyEvent {
			constructor(name, start) {
				this.name = name;
				this.dates = [];
				let initial_date = new Date();
				initial_date.setDate(start);
				this.dates.push(initial_date);
				for (let i = 1; i < 10; i++) {
					initial_date = new Date();
					initial_date.setDate(start);
					initial_date.setMonth((initial_date.getMonth() + i) % 12);
					this.dates.push(initial_date);
				}
			}
		}

		class WeeklyEvent {
			constructor(name, start) {
				this.name = name;
				this.dates = [];
				let initial_date = new Date();
				initial_date.setDate(start);
				this.dates.push(initial_date);
				for (let i = 1; i < 10; i++) {
					initial_date = new Date();
					initial_date.setDate(start);
					initial_date.setDate(initial_date.getMonth() + 7 * i);
					this.dates.push(initial_date);
				}
			}
		}
		const weekly_event = {
			constructor(start) {
				let pay_date = Date();
				pay_date.setDate(start);
				this.dates.push(pay_date);
				for (let i = 0; i < 10; i++) {
					pay_date.setDate(pay_date.getDate + 7);
					this.dates.push(pay_date);
				}
				console.log(pay_date);
			},
			name: 'monthly event',
			start_date: 0,
			dates: []
		};
		const create_event = (name, type, start) => {
			if (type == 'monthly') {
				const event = new MonthlyEvent(name, start);
				return event;
			} else if (type == 'weekly') {
				const event = new WeeklyEvent(name, start);
				return event;
			} else {
				alert('Not a valid event type.');
			}
		};

		function DateList(props) {
			const event = props.event;
			const dates = event.dates.map(date => (
				<li key={date.toString()}>{date.toString()}</li>
			));
			return <ul>{dates}</ul>;
		}
		const gym = create_event('Club Sport', 'monthly', 5);
		const stocks = create_event('Stocks', 'weekly', 1);
		console.log(gym.dates[4].getMonth());

		return (
			<div>
				{/* <h3>{this.state.data[0].title}</h3>
				<p>{this.state.data[0].created_at}</p>
				<p>{this.state.data[0].message}</p> */}
				<h3>{stocks.name}</h3>
				<h3>{stocks.start_date}</h3>
				<DateList event={stocks} />
			</div>
		);
	}
}

export default Article;

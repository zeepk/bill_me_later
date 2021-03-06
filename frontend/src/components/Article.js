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
		function MonthlyEvent(name, start) {
			(this.name = name), (this.start_date = start), (this.dates = []);

			let pay_date = Date();
			pay_date.setDate(start);
			this.dates.push(pay_date);
			for (let i = 0; i < 10; i++) {
				pay_date.setMonth(i % 11);
				this.dates.push(pay_date);
				console.log(pay_date);
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
					console.log(pay_date);
				}
			},
			name: 'monthly event',
			start_date: 0,
			dates: []
		};
		const create_event = (name, type, start) => {
			if ((type = 'monthly')) {
				const event = new MonthlyEvent(name, start);
				event.name = name;
				return event;
			} else if ((type = 'weekly')) {
				const event = weekly_event(start);
				event.name = name;
				return event;
			} else {
				alert('Not a valid event type.');
			}
		};

		const gym = create_event('Club Sport', 'monthly', 5);

		return (
			<div>
				{/* <h3>{this.state.data[0].title}</h3>
				<p>{this.state.data[0].created_at}</p>
				<p>{this.state.data[0].message}</p> */}
				<h3>{gym.name}</h3>
				<h3>{gym.start_date}</h3>
				<h3>{gym.dates[0]}</h3>
			</div>
		);
	}
}

export default Article;

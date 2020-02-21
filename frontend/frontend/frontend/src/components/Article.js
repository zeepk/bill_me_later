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

		return (
			<div>
				<h3>{this.state.data[0].title}</h3>
				<p>{this.state.data[0].created_at}</p>
				<p>{this.state.data[0].message}</p>
			</div>
		);
	}
}

export default Article;

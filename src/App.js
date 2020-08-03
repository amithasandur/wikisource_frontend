import React from 'react';
import Button from '@material-ui/core/Button';
import wiki from './wiki.png';
import './App.css';

import axios from 'axios';
import { ActionExtension } from 'material-ui/svg-icons';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Enter Article Name',
			value2: 'Enter Article Name',
			txt: '',
			articleArray: [],
			bookarray: [],
			sciArray: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeDelete = this.handleChangeDelete.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleChangeDelete(event) {
		this.setState({ value2: event.target.value2 });
	}
	//done
	async handleSubmit(event) {
		event.preventDefault();
		var resp = await axios.get(
			`http://127.0.0.1:5000//wikiarticles/${this.state.value}`
		);
		this.setState({ ...this.state, txt: resp.data.data[0].url });
	}
	//todo
	async handleClick(event) {
		var resp = await axios.get('http://127.0.0.1:5000/select');
		this.setState({ ...this.state, articleArray: resp.data.data }, () => {
			console.log(this.state.articleArray);
		});
	}
	async handleDelete(event) {
		await axios.get(
			`http://127.0.0.1:5000//delArticle/${this.state.value}`
		);
		console.log('Hello');
	}
	async handleGetBooks(event) {
		var resp = await axios.get(
			`http://127.0.0.1:5000//books/${this.state.value}`
		);
		this.setstate({ ...this.state, bookArray: resp.data });
	}
	async handleGetPapers(event) {
		var resp = await axios.get(
			`http://127.0.0.1:5000//papers/${this.state.value}`
		);
		this.setstate({ ...this.state, sciArray: resp.data });
	}
	async handleGetNumSources(event) {}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={wiki} className="App-logo" alt="logo" />
					<p>WikiSource</p>

					<form onSubmit={this.handleSubmit}>
						<label>
							Name:
							<input
								type="text"
								value={this.state.value}
								onChange={this.handleChange}
							/>
						</label>
						<input type="submit" value="Submit" />
					</form>
					<form onSubmit={this.handleDelete}>
						<label>
							Name:
							<input
								type="text"
								value={this.state.value2}
								onChange={this.handleChangeDelete}
							/>
						</label>
						<input type="submit" value="Delete" />
					</form>
					<p>{this.state.txt}</p>
					<Button
						variant="contained"
						color="primary"
						onClick={() => this.handleClick()}
					>
						{' '}
						Show Articles{' '}
					</Button>
					<ol>
						Available Articles:
						{this.state.articleArray.map((article) => (
							<li key={article.name}>{article.url}</li>
						))}
					</ol>
					<a
						className="App-link"
						href="https://en.wikipedia.org/wiki/Wikipedia:Multiyear_ranking_of_most_viewed_pages"
						target="_blank"
						rel="noopener noreferrer"
					>
						Most popular Wikipedia articles
					</a>
				</div>
			</div>
		);
	}
}

export default App;

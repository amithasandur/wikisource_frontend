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
			articleDelete: 'Enter Article Name',
			articleInsert: 'Enter Article Name',
			url: '',
			name: '',
			number: 0,
			newUrl: '',
			newName: '',
			articleArray: [],
			bookarray: [],
			sciArray: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeDelete = this.handleChangeDelete.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleChangeInsert = this.handleChangeInsert.bind(this);
		this.handleInsert = this.handleInsert.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleChangeDelete(event) {
		this.setState({ articleDelete: event.target.value });
	}
	handleChangeInsert(event) {
		this.setState({ articleInsert: event.target.value });
	}
	//done
	async handleSubmit(event) {
		event.preventDefault();
		var resp = await axios.get(
			`http://127.0.0.1:5000//wikiarticles/${this.state.value}`
		);
		this.setState({
			...this.state,
			url: resp.data.data[0].url,
			name: resp.data.data[0].name,
		});
	}
	//todo
	async handleClick(event) {
		var resp = await axios.get('http://127.0.0.1:5000/select');
		this.setState({ ...this.state, articleArray: resp.data.data }, () => {
			console.log(this.state.articleArray);
		});
	}
	async handleDelete(event) {
		event.preventDefault();
		await axios.delete(
			`http://127.0.0.1:5000//delArticle/${this.state.articleDelete}`
		);
		console.log(this.state.articleDelete);
	}
	/////////////////////////////////
	async handleGetBooks(event) {
		var resp = await axios.get(
			`http://127.0.0.1:5000//books/${this.state.value}`
		);
		this.setstate({ ...this.state, bookArray: resp.data });
	}
	async handleGetPapers(event) {
		var resp = await axios.get(
			`http://127.0.0.1:5000//$this.state./${this.state.value}`
		);
		this.setstate({ ...this.state, sciArray: resp.data });
	}
	async handleGetNumSources(event) {}
	async UpdateArticleName(event) {}

	async handleInsert(event) {
		let body = {
			url: this.state.articleInsert,
		};
		await axios.post(`http://127.0.0.1:5000//insert`, body);
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={wiki} className="App-logo" alt="logo" />
					<p>WikiSource</p>

					<form onSubmit={this.handleSubmit}>
						<label>
							Select Article:
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
							Delete Article:
							<input
								type="text"
								value={this.state.articleDelete}
								onChange={this.handleChangeDelete}
							/>
						</label>
						<input type="submit" value="Delete" />
					</form>
					<form onSubmit={this.handleInsert}>
						<label>
							Insert Article:
							<input
								type="text"
								value={this.state.articleInsert}
								onChange={this.handleChangeInsert}
							/>
						</label>
						<input type="submit" value="Insert" />
					</form>
					<p>Selected Article: {this.state.url}</p>
					<Button
						variant="contained"
						color="primary"
						onClick={() => this.handleClick()}
					>
						{' '}
						Show Articles{' '}
					</Button>
					<ul>
						Available Articles:
						{this.state.articleArray.map((article) => (
							<li key={article.name}>{article.url}</li>
						))}
					</ul>
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

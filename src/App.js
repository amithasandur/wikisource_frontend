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
			advancedInsert: 'Enter ISBN',
			similartiyRating: '',
			url: '',
			name: '',
			number: 0,
			newUrl: '',
			newName: '',
			articleArray: [],
			extArray: [],
			bookArray: [],
			sciArray: [],
			ISBN: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeDelete = this.handleChangeDelete.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleChangeInsert = this.handleChangeInsert.bind(this);
		this.handleInsert = this.handleInsert.bind(this);
		this.getBooks = this.getBooks.bind(this);
		this.getExtarticles = this.getExtarticles.bind(this);
		this.getScipapers = this.getScipapers.bind(this);
		this.handleChangeAdvanced = this.handleChangeAdvanced.bind(this);
		this.handleAdvanced = this.handleAdvanced.bind(this);
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
	handleChangeAdvanced(event) {
		this.setState({ advancedInsert: event.target.value });
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
		console.log(resp.data);
	}
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

	async getBooks(event) {
		var resp = await axios.get(
			`http://127.0.0.1:5000//books/${this.state.value}`
		);
		this.setState({ ...this.state, bookArray: resp.data.data });
		console.log(resp.data);
	}

	async getScipapers(event) {
		var resp = await axios.get(
			`http://127.0.0.1:5000//scipapers/${this.state.value}`
		);
		this.setState({ ...this.state, sciArray: resp.data.data });
		console.log(this.state.sciArray);
	}

	async getExtarticles(event) {
		var resp = await axios.get(
			`http://127.0.0.1:5000//extarticles/${this.state.value}`
		);
		this.setState({ ...this.state, extArray: resp.data.data });
		console.log(resp.data.data);
	}

	async handleInsert(event) {
		let body = {
			url: this.state.articleInsert,
		};
		await axios.post(`http://127.0.0.1:5000//insert`, body);
	}
	//todo
	async handleAdvanced(event) {
		event.preventDefault();
		console.log(this.state.name);
		console.log(this.state.ISBN);
		var resp = await axios.get(
			`http://127.0.0.1:5000//afunction/${this.state.name}/${this.state.advancedInsert}`
		);
		this.setState({ ...this.state, similarityRating: resp.data });
		console.log(resp.data);
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={wiki} className="App-logo" alt="logo" />
					<p>WikiSource</p>
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
					<form onSubmit={this.handleAdvanced}>
						<label>
							Enter ISBN:
							<input
								type="text"
								value={this.state.advancedInsert}
								onChange={this.handleChangeAdvanced}
							/>
						</label>
						<input type="submit" value="Submit" />
					</form>
					<Button
						variant="contained"
						color="primary"
						onClick={this.getBooks}
					>
						{' '}
						Get Books{' '}
					</Button>
					<ul>
						Cited Books:
						{this.state.bookArray.map((book) => (
							<li key={book.isbn}>
								{'Book Title: ' +
									book.title +
									' ISBN: ' +
									book.isbn}
							</li>
						))}
					</ul>
					<Button
						variant="contained"
						color="primary"
						onClick={this.getScipapers}
					>
						{' '}
						Get Scientific Papers{' '}
					</Button>
					<ul>
						Cited Scientific Papers:
						{this.state.sciArray.map((paper) => (
							<li key={paper.title}>{paper.title}</li>
						))}
					</ul>
					<Button
						variant="contained"
						color="primary"
						onClick={this.getExtarticles}
					>
						{' '}
						Get External Articles{' '}
					</Button>
					<ul>
						Articles:
						{this.state.extArray.map((art) => (
							<li key={art.articleurl}>{art.articleurl}</li>
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

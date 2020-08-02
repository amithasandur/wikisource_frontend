import React from 'react';
import wiki from './wiki.png';
import './App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={wiki} className="App-logo" alt="logo" />
				<p>WikiSource</p>
				<input type="text" className="input" placeholder="Search..." />
				<Button
					variant="contained"
					color="primary"
					onClick={clickButton()}
				>
					{' '}
					Search{' '}
				</Button>
				<a
					className="App-link"
					href="https://en.wikipedia.org/wiki/Wikipedia:Multiyear_ranking_of_most_viewed_pages"
					target="_blank"
					rel="noopener noreferrer"
				>
					Most popular Wikipedia articles
				</a>
			</header>
		</div>
	);
}
function clickButton() {
	axios.get('http://127.0.0.1:5000/select').then((resp) => {
		console.log(resp.data);
	});
}
/* const getArticlesSuccess = (res) => {
	return {
		type: GET_ARTICLES_SUCCESS,
		payload: res,
	};
};
const getArticlesFailed = (err) => {
	return {
		type: GET_ARTICLES_FAILED,
		payload: err,
	};
};
const getArticlesRequest = () => {
	return {
		type: GET_ARTICLES_REQUEST,
	};
};
export const getArticles = () => (dispatch) =>
	new Promise((resolve, reject) => {
		dispatch(getArticlesRequest());

		let body = {
			crossDomain: true,
		};

		axios
			.get('http://127.0.0.1:5000' + '/wikiarticles', body)
			.then((res) => {
				dispatch(getArticlesSuccess(res.data.data));
				resolve(res.data.data);
			})
			.catch((err) => {
				dispatch(getArticlesFailed(err));
				reject(err);
			});
	}); */

export default App;

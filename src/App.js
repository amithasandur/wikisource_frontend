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
			value: 'ASDFASDFASDFASDF',
			txt: '',
			articleArray: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	async handleSubmit(event) {
		event.preventDefault();
		var resp = await axios.get(
			`http://127.0.0.1:5000//wikiarticles/${this.state.value}`
		);
		this.setState({ ...this.state, txt: resp.data.data[0].url });
	}

	async handleClick(event) {
		var resp = await axios.get('http://127.0.0.1:5000/select');
		this.setState({ ...this.state, article: resp.data });
	}
	async handleDelete(event) {
		await axios.delete(
			`http://127.0.0.1:5000//wikiarticles/${this.state.value}`
		);
	}

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
					<p>{this.state.txt}</p>
					<Button
						variant="contained"
						color="primary"
						onClick={this.handleClick}
					>
						{' '}
						Show Articles{' '}
					</Button>
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
/* 0155e1bde4a43d44888f084b554131e2bf5eb573

    return (
        <div>
        <Button variant="contained" color="primary" disableElevation>
            Delete
        </Button>
            <Button variant="contained" color="primary" disableElevation>
                Search
            </Button>
            <InputBase
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
        />
    <SearchIcon />
            <InputBase
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon />
    <CustomPaginationActionsTable></CustomPaginationActionsTable>
            <ThreeColTable></ThreeColTable>
            <FourColTable></FourColTable>
            <FiveColTable></FiveColTable>

        </div>
    );
}
 */
//a
/* const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
})); */

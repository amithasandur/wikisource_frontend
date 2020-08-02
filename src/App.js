
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CustomPaginationActionsTable from './myTable';
import ThreeColTable from "./my3RowTable";
import FiveColTable from "./my5rowtable";
import FourColTable from "./my4rowtable";
//a
const useStyles = makeStyles((theme) => ({
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
}));

export default function DisableElevation() {
    const classes = useStyles();
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
>>>>>>> 0155e1bde4a43d44888f084b554131e2bf5eb573

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

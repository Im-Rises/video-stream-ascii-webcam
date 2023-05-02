import React, {useEffect} from 'react';
import './App.scss';
import CameraAsciiPanel from './components/CameraAsciiPanel';
import GitHubProjectPanel from './components/GitHubProjectPanel';
import {AUTHOR, GITHUB_LINK_TEXT, GITHUB_URL} from './constants/github-project-constants';

const App = () => (
	<div className='App'>
		<GitHubProjectPanel link={GITHUB_URL} author={AUTHOR}/>
		<CameraAsciiPanel/>
	</div>
);

export default App;

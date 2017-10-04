import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskList from './TaskList.js';

const destination = document.querySelector('#container')

ReactDOM.render(
	<div>
		<TaskList />
	</div>,
	destination
);
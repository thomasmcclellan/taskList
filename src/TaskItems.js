import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TaskItems extends Component {
	constructor(props, context) {
		super(props, context);

		this.createTasks = this.createTasks.bind(this);
		this.delete = this.delete.bind(this);
	}

	delete(key) {
		this.props.delete(key);
	}

	createTasks(item) {
		return <li onClick={ (e) => this.delete(item.key, e) } key={ item.key }>{ item.text }</li>
	}

	render() {
		let taskEntries = this.props.entries;
		let listItems = taskEntries.map(this.createTasks);

		return (
			<ul className='list'>
				<FlipMove duration={ 250 } easing='ease-out'>
					{ listItems }
				</FlipMove>
			</ul>
		);
	}
};

export default TaskItems;
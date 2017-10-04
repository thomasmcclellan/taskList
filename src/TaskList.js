import React, { Component } from 'react';
import TaskItems from './TaskItems.js';
import './TaskList.css';

class TaskList extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e) {
		let itemArray = this.state.items;

		if (this._inputElement.value) {
			itemArray.unshift({
				text: this._inputElement.value,
				key: Date.now()
			});

		this.setState({
			items: itemArray
		});

		this._inputElement.value='';
		}

		console.log(itemArray);
		e.preventDefault();
	}

	deleteItem(key) {
		let filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});

		this.setState({
			items: filteredItems
		});
	}

	render() {
		return (
			<div className='taskListMain'>
				<div className='header'>
					<form onSubmit={ this.addItem }>
						<input 
							ref={ (a) => this._inputElement = a }
							placeholder='enter task' 
							type='text'
						></input>
						<button type='submit'>Add</button>
					</form>
				</div>
				<TaskItems 
					entries={ this.state.items } 
					delete={ this.deleteItem } />
			</div>
		);
	}
};

export default TaskList;
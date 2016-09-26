// src/components/App.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import TodoHeader from './TodoHeader.js';
import TodoMain from './TodoMain.js';
import TodoFooter from './TodoFooter.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // todos: store.get('todos') || [],
      todos: [],
      isAllChecked: false
    };
  }

  allChecked() {
    let isAllChecked = false;
    if (this.state.todos.every(todo => todo.isDone)) {
      isAllChecked = true;
    }
    this.setState({
      todos: this.state.todos,
      isAllChecked: isAllChecked
    });
  }

  addTodo(todoItem) {
    this.state.todos.push(todoItem);
    this.allChecked();
  }

  deleteTodo(index) {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
  }

  clearDone() {
    let todos = this.state.todos.filter(todo => !todo.isDone);
    this.setState({
      todos: todos,
      isAllChecked: false
    });
  }

  changeTodoState(index, isDone, isChangeAll = false) {
    if (isChangeAll) {
      this.setState({
        todos: this.state.todos.map((todo) => {
          todo.isDone = isDone;
          return todo;
        }),
        isAllChecked: isDone
      })

    } else {
      this.state.todos[index].isDone = isDone;
      this.allChecked();
    }
  }

  render() {
    let info = {
      isAllChecked: this.state.isAllChecked,
      todoCount: this.state.todos.length || 0,
      todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => todo.isDone).length || 0)
    };
    return (
      <div className="todo-wrap">
        <TodoHeader addTodo={this.addTodo.bind(this)}/>
        <TodoMain todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)}></TodoMain>
        <TodoFooter {...info} changeTodoState={this.changeTodoState.bind(this)} clearDone={this.clearDone.bind(this)}></TodoFooter>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
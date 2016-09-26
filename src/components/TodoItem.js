// src/components/TodoItem.js
'use strict';

import React from 'react';
import {
  findDOMNode
} from 'react-dom';

class TodoItem extends React.Component {

  handlerChange() {
    let isDone = !this.props.isDone;
    this.props.changeTodoState(this.props.index, isDone);
  }

  handlerMouseOver() {
    findDOMNode(this).style.background = '#eee';
    findDOMNode(this.refs.delButton).style.display = 'inline-block';
  }

  handlerMouseOut() {
    findDOMNode(this).style.background = '#fff';
    findDOMNode(this.refs.delButton).style.display = 'none';
  }

  handlerDelete() {
    this.props.deleteTodo(this.props.index);
  }

  render() {
    let className = this.props.isDone ? 'task-done' : '';

    return (
      <li onMouseOver={this.handlerMouseOver.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)}>
        <label htmlFor="">
          <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)} />
          <span className={className}>{this.props.text}</span>
        </label>
        <button ref="delButton" className="btn btn-danger" onClick={this.handlerDelete.bind(this)}>删除</button>
      </li>
    )
  }
};

export default TodoItem;
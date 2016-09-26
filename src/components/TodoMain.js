// src/components/TodoMain.js
'use strict';

import React from 'react';
import TodoItem from './TodoItem';

class TodoMain extends React.Component {
  render() {
    if (this.props.todos.length == 0) {
      return (
        <div className="todo-empty">恭喜你，目前没有待办的事件。</div>
      )
    } else {
      return (
        <div className="todo-main">
          {
            this.props.todos.map((todo, index) => {
              return <TodoItem text={todo.value} isDone={todo.isDone} index={index} key={index} {...this.props}></TodoItem>
            })
          }
        </div>
      )
    }
  };
}

export default TodoMain;
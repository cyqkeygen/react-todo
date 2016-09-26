// src/components/TodoHeader.js
'use strict';

import React from 'react';

class TodoHeader extends React.Component {
  handleKeyUp(e) {
    if (e.keyCode == 13) {
      let value = e.target.value;

      if (!value) return false;

      let newTodoItem = {
        value: value,
        isDone: false
      };

      e.target.value = "";

      this.props.addTodo(newTodoItem);
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp.bind(this)} type="text" placeholder="请输入你的任务名称，并按回车确认"/>
      </div>
    )
  }
}

export default TodoHeader;
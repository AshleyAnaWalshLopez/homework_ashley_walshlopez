import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    return (
      <div>
        <h1 className="bg-light m-3 p-3">Restaurant Task List:</h1>
        <ul className="list-group">
          <li className="list-group-item">Choose dishes of the day</li>
        </ul>
      </div>
    );
  }
}

export default TaskList;

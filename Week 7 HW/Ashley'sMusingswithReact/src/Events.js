import React, { Component } from 'react';

class Events extends Component {
  render() {
    return (
      <div>
        <h1 className="bg-light m-3 p-3">Special Events</h1>
        <ul className="list-group">
          <li className="list-group-item">Halloween Spooktacular!</li>
          <li className="list-group-item">Tuesday Night Trivia </li>
        </ul>
      </div>
    );
  }
}

export default Events;

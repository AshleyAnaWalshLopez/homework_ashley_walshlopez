import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div>
        <h1 className="bg-light m-3 p-3">Menu List:</h1>
        <ul className="list-group">
          <li className="list-group-item">Bacon</li>
          <li className="list-group-item">Fruit</li>
        </ul>
      </div>
    );
  }
}

export default Menu;

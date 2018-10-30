import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskList from './TaskList';
import Menu from './Menu';
import Events from './Events';

ReactDOM.render(
  <div className="container">
  <h1>Welcome to Our Restaurant</h1>
    <div className="row justify-content-center">
      <div className="col-6">
        <TaskList />
      </div>
      <div className="col-6">
        <Menu />
      </div>
      <div className="col-6">
        <Events />
      </div>
    </div>
  </div>
  , document.getElementById('root'));

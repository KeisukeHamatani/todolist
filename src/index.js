
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class TodoList extends React.Component {
    render() {
      return (
        <div className="todolist">
          <div className="todolist">
            {/*<aaaaa />*/}
          </div>
          <div className="todolist">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
  );
  
  
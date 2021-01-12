
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*function TextBox_dist(props) {
  return (
    <div>
      <input type="text" />
      <button>追加</button>
    </div>
  );
}*/

const TextBox = (props) => {
  return (
    <div>
      <input type="text" />
      <button>追加</button>
    </div>
  );
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{           //task配列
        task: null,       //入力したタクス格納
        checked: false    //タスク完了判定
      }],
      index: 0,           //入力順インデックス
      textmessage: null,  //テキストボックス入力文字
    };
  }

  handleClic(){
    const tasks = this.state.tasks.slice(0, this.state.index + 1); //現在のtask配列を保持
    if(inputtext === null){
      return;
    }
    this.setState({
        /* テキストボックス内の文字(inputtext)を取得 */
    });
  }

  render() {
    return (
      <div className="todolist">
        <TextBox
        /******/
        onClick = {() => { this.handleClic()}}
        />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);


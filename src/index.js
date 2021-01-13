
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TextBox = (props) => {
  return (
    <div>
      <div>
        <input type="text" value={props.value} onChange={props.onChange} />
        <button onClick={props.onClick}>
          追加
      </button>
      </div>
    </div>
  );
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],        //task配列
      index: 0,           //入力順インデックス
      inputtext: "",      //テキストボックス入力文字
    };
  }

  handleClick() {
    /* 現在のtask配列を保持 */
    const tmp_todolist = this.state.todolist.slice(0, this.state.index+1);
    const tmp_index = this.state.index;

    /* nullまたはから文字でない場合 */
    if (this.state.inputtext) {
      /* todolistを更新 */
      const new_task = {
        task: this.state.inputtext,
        checked: false,
      };
      this.setState({
        todolist: tmp_todolist.concat(new_task),
        inputtext: "",
        index: tmp_index + 1,
      });
    }

    console.log(this.state.todolist);
  }

  handleChange(event) {
    /* テキストボックス内の文字(inputtext)をstatus.inputetextへ取得 */
    /* setStateで更新後、更新後の値で再レンダされる*/
    this.setState({ inputtext: event.target.value });
  }

  render() {
    const tmp_todolist = this.state.todolist;
    const makelist = tmp_todolist.map((todo, num) => {
      return(
        <li key={num}> 
          {todo.task} 
        </li>
      );}
    );

    return (
      <div className="todolist">
        <TextBox
          value={this.state.inputtext}
          onChange={(event) => { this.handleChange(event) }}
          onClick={() => { this.handleClick() }}
        />
        <ol>{makelist}</ol>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);


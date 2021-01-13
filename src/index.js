
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TextBox = (props) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.onClick}>
        追加
      </button>
    </div>
  );
};

const List = (props) => {
  return props.todolist.map((todo) => {
    return (
      <div key={todo.key}>
        <form >     
          <div>
            <li key={todo.key}>
              {todo.task}
            </li>
          </div>
          <div>
            <input type="checkbox" name="did" onChange={() => props.onChange(todo.key)} />
            <label htmlFor="did">完了</label>
          </div >
        </form>
        <div>
          <button onClick={() => (props.onClick(todo.key))} >
            削除
          </button>
        </div>
      </div>
    );
  });
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],       //task配列
      index: 0,           //入力順インデックス
      inputtext: "",      //テキストボックス入力文字
    };
  }

  handleClick() {
    /* 現在のtask配列を保持 */
    const tmp_todolist = this.state.todolist.slice(0, this.state.index + 1);
    const tmp_index = this.state.index;

    /* nullまたはから文字でない場合 */
    if (this.state.inputtext) {
      /* todolistを更新 */
      const new_task = {
        task: this.state.inputtext,
        checked: false,
        key: this.state.index,
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
    this.setState({
      inputtext: event.target.value
    });
  }

  handleChange_Checkbox(key) {
    const tmp_todolist = this.state.todolist;
    tmp_todolist[key].checked = !tmp_todolist[key].checked;
    /* チェックボックスを更新をtodolistへ反映 */
    this.setState({
      todolist: tmp_todolist
    });
    console.log(this.state.todolist);
  }

  handleClcik_Checkbox(key) {
    const tmp_todolist = this.state.todolist;
    /* チェックボックスにチェックがついていれば、削除ボタンで削除可能にする */
    if (tmp_todolist[key].checked === true) {
      delete tmp_todolist[key];
      this.setState({
        todolist: tmp_todolist
      });
      console.log(this.state.todolist);
    }
  }

  render() {
    return (
      <div className="todolist">
        <TextBox
          value={this.state.inputtext}
          onChange={(event) => { this.handleChange(event) }}
          onClick={() => { this.handleClick() }}
        />
        <List
          todolist={this.state.todolist}
          onChange={(key) => { this.handleChange_Checkbox(key) }}
          onClick={(key) => { this.handleClcik_Checkbox(key) }}
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


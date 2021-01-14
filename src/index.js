
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
        <div>
          <li key={todo.key}>
            {todo.task}
          </li>
          <input type="checkbox" name="did" onChange={() => props.onChange(todo.key)} />
          <label htmlFor="did">完了</label>
          {todo.checked ?
            <button onClick={() => (props.onClick(todo.key))} >
              削除
            </button>
            : null}
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
      inputtext: "",      //テキストボックス入力文字
    };
  }

  handleClick() {
    /* nullまたはから文字でない場合 */
    if (this.state.inputtext) {
      /* todolistを更新 */
      const task = {
        task: this.state.inputtext,
        checked: false,
        key: Date.now(),    //要素ごとにキーとしてDate.now()(現在時刻ms)をもつ
      };
      this.setState({
        todolist: this.state.todolist.concat(task),
        inputtext: "",
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

  handleChangeCheckbox(key) {
    /* チェックボックスを更新をtodolistへ反映 */
    const todolist = this.state.todolist.map((todo) => {
      if( todo.key === key ){
      /* キーが一致する要素のcheckedを更新する */
      const task = {
        task: todo.task,
        checked: !todo.checked,
        key: todo.key
      };
        return task;
      } else {
        return todo;
      }});
    this.setState({ todolist });

    console.log(this.state.todolist);
  }

  handleClcikCheckbox(key) {
    /* todolistから要素を削除 */
    this.setState({ todolist: this.state.todolist.filter(todo => todo.key !== key) })
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
          onChange={(key) => { this.handleChangeCheckbox(key) }}
          onClick={(key) => { this.handleClcikCheckbox(key) }}
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


import './CSS/TodoItems.css'

const TodoItems = ({no,display,text}) => {
  return (
    <div className="todoitems">
      <div className="todoitems-container">
        <div className="todoitems-text">{text}</div>
      </div>
      <button className='todo-rem-btn'>Remove</button>
    </div>
  )
}

export default TodoItems

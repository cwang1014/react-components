function GroceryList(props) {
  return (
    <div>
      <h2>My Todo List</h2>
      <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe maybe sleep']}/>
    </div>
  );
}

function TodoListItem(props) {
  const [isDone, setIsDone] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: isHovering ? 'bold' : 'normal',
  };

  return (
    <li
      style={style}
      onClick={() => setIsDone(!isDone)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.todo}
    </li>
  );
}

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  );
}



ReactDOM.render(<GroceryList />, document.getElementById("app"));
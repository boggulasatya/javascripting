// TodoItem.js
const TodoItem = (props) => {
  const handleDeleteClick = () => {
    props.onDelete(props.id); // Pass the id to onDelete
  };

  return (
  <li>{props.task} <button onClick={handleDeleteClick}>Delete</button></li>)
}
export default TodoItem;
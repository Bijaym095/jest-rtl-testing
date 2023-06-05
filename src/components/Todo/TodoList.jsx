const TodoList = ({ lists, handleDelete, handleEdit }) => {
  return (
    <ul>
      {lists.map((list, index) => (
        <div key={index} className="flex justify-between">
          <li>{list}</li>

          <div className="space-x-2">
            <button onClick={() => handleEdit(list, index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;

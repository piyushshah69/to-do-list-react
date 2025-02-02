import ToDoItem from "../ToDoItem/ToDoItem";

/* eslint-disable react/prop-types */
const ToDoList = (props) => {
    const {data, handleDelete, handleEdit} = props;
    return (
        data.length !== 0 && <div className="w-[90%] max-w-[700px] mt-4 bg-gray-200 p-4 flex flex-col gap-4 m-auto rounded max-h-[70vh] overflow-auto">
            {data.map((todo) => {
                return <ToDoItem key={todo.id} time={todo.time} todoText={todo.todoText} delete={() => handleDelete(todo.id)} edit={(text) => handleEdit(todo.id, text)} />
            })}
        </div>
    )
}

export default ToDoList;
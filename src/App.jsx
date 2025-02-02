import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList/ToDoList';
import { toast } from 'react-toastify';

function App() {
    const [uniqueId, setUniqueId] = useState(0);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    function getCurrentDateTimeFormatted() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); 

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    const formattedDateTime = `${hours}:${minutes} ${ampm}, ${day}/${month}/${year}`;
    return formattedDateTime;
    }

    const handleClick = () => {
        if (search.length === 0) return;
        let currentData = {
            id: uniqueId,
            todoText: search, 
            time: getCurrentDateTimeFormatted(),
        }
        setData([...data, currentData]);
        setUniqueId(uniqueId + 1);    
        console.log(data);
        setSearch(''); 
        toast.success('Added successfully!');
    }

    const handleDelete = (id) => {
        const filteredData = data.filter((todo) => {
            return todo.id != id;
        })
        setData(filteredData);
        toast.success('Deleted successfully!');
    }

    const handleEdit = (id, text) => {
        const editedData = data.map((todo) => {
            if (todo.id === id) {
                if (todo.todoText !== text) toast.success('Saved successfully!');
                todo.todoText = text;
            }
            return todo;
        })
        setData(editedData);
    }

    return (
    <>
        <h1 className='text-3xl font-semibold text-center my-8 italic bg-gray-200 w-[90%] max-w-[700px] m-auto py-2'>To-Do List</h1>
        <form onSubmit={(e) => e.preventDefault()}
        className='flex justify-between m-auto gap-2 w-[90%] max-w-[700px]'>
            <input type='text' className='border focus:outline-0 rounded py-2 px-3 w-[70%] sm:w-[80%]'
                onChange={(e)=>setSearch(e.target.value)} value={search}
            />
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 rounded w-[30%] sm:w-[20%] cursor-pointer' onClick={handleClick}>Add Task</button>
        </form>
        <ToDoList data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
    )
}

export default App

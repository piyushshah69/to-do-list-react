/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  MdDeleteOutline,
  MdOutlineModeEdit,
  MdOutlineCheck
} from "react-icons/md";


const ToDoItem = (props) => {
  const onDelete = props.delete;
  const onEdit = props.edit;
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(props.todoText)
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  }

  const handleSave = () => {
    onEdit(text);
    setIsEditing(false);
  }

  return (
    <div className="bg-white rounded flex justify-between items-center p-2 md:p-4">
      <div className="flex gap-2 md:gap-4 w-[75%]">
        <input type="checkbox" checked={isChecked} className="w-7 checked:w-5 cursor-pointer" onClick={()=>isChecked?setIsChecked(false):setIsChecked(true)}/>
        <div className="flex flex-col max-w-[80%] gap-1">
          {isEditing ?
            <input className="text-lg max-w-[100%] border rounded p-1 px-2 focus:outline-0" value={text} onChange={(e) => setText(e.target.value)} /> :
            <>
              <label className={`text-lg max-w-[100%] first-letter:capitalize cursor-pointer ${isChecked ? 'line-through text-gray-500' : null}`}
              onClick={() => isChecked ? setIsChecked(false) : setIsChecked(true)}>{props.todoText}</label>
              <p className="text-[13px]">{props.time}</p>
            </>
          }
        </div>
      </div>
      <div className="flex gap-2">
        <button className="p-1 md:px-2 text-center bg-red-500 text-white text-xl md:text-2xl rounded cursor-pointer hover:bg-red-600" onClick={onDelete}><MdDeleteOutline /></button>
        {isEditing ? 
          <button className="p-1 md:px-2 bg-green-600 text-white text-xl md-text-2xl rounded cursor-pointer hover:bg-green-700" onClick={handleSave} ><MdOutlineCheck /></button> :
          <button className="p-1 md:px-2 bg-green-600 text-white text-xl md-text-2xl rounded cursor-pointer hover:bg-green-700" onClick={handleClick} ><MdOutlineModeEdit /></button>
        }
      </div>
    </div>
  )
}

export default ToDoItem;
import { useContext } from "react";
import { MyContext } from "./MyContext";

function Task({id, description}) {
    const {setTasks, lineThrough, setLineThrough} = useContext(MyContext);

    const handleDelete = (itemToDelete) => {
        setTasks(prevItems => prevItems.filter(item => item.description !== itemToDelete));
    }

    const handleLineThrough = (id) => {
        setLineThrough(prev => !prev);
        
    }

    return (
        <>
             <div className="h-24 w-1/2 flex flew-row mt-5">
                <div onClick={() => handleLineThrough(id)} className={`h-full w-2/3 flex justify-center items-center border-2 border-red-600 hover:bg-gray-50 active:bg-gray-200 cursor-pointer 
                    ${lineThrough ? `line-through` : ""}
                `}>
                    {description}<br/>
                    {/* id: {id} */}
                </div>
                <button onClick={() => handleDelete(description)} id={id} className="h-full w-1/3 font-semibold text-black text-xl border-2 border-l-0 border-red-600 hover:bg-gray-50 active:bg-gray-200">Delete</button>
            </div>
        </>
    )
}

export default Task;